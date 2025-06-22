import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { z } from "zod";

const prisma = new PrismaClient();

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  secret:
    process.env.AUTH_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    "development-secret-key-change-in-production",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Mật khẩu",
          type: "password",
        },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        // Mock admin users để demo (trong thực tế sẽ lấy từ database)
        const adminUsers = [
          {
            id: "admin-1",
            email: "admin@nghean-historical.vn",
            password: "admin123",
            name: "Admin User",
            role: "ADMIN",
          },
          {
            id: "superadmin-1",
            email: "superadmin@nghean-historical.vn",
            password: "superadmin123",
            name: "Super Admin",
            role: "SUPER_ADMIN",
          },
        ];

        // Tìm admin user
        const adminUser = adminUsers.find((u) => u.email === email);

        if (!adminUser) {
          return null;
        }

        // Kiểm tra password (trong thực tế sẽ dùng bcrypt)
        if (password !== adminUser.password) {
          return null;
        }

        // Chỉ cho phép admin và super admin
        if (adminUser.role !== "ADMIN" && adminUser.role !== "SUPER_ADMIN") {
          throw new Error("UNAUTHORIZED_ROLE");
        }

        return {
          id: adminUser.id,
          name: adminUser.name,
          email: adminUser.email,
          image: null,
          role: adminUser.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Thêm thông tin vai trò vào token
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as
          | "USER"
          | "ADMIN"
          | "GUIDE"
          | "SUPER_ADMIN";
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
