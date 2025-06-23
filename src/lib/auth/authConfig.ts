
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

const prisma = new PrismaClient();

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
  providers: [
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

        // Tìm người dùng dựa trên email
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          return null;
        }

        // Chỉ cho phép admin và super admin đăng nhập
        if (!["ADMIN_TOUR", "ADMIN_SHOP", "SUPER_ADMIN"].includes(user.role)) {
          return null;
        }

        // Kiểm tra mật khẩu
        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.id as string;
      }
      return session;
    },
    async signIn({ user }) {
      // Chỉ cho phép admin và super admin đăng nhập
      if (user.role && ["ADMIN_TOUR", "ADMIN_SHOP", "SUPER_ADMIN"].includes(user.role)) {
        return true;
      }
      return false;
    },
  },
};
