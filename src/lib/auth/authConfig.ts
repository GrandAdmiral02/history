
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

const prisma = new PrismaClient();

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET || "nghean-historical-secret-key-2024",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "admin@nghean.com",
        },
        password: {
          label: "Mật khẩu", 
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          console.log("🔐 Starting authentication process...");
          
          const parsedCredentials = z
            .object({
              email: z.string().email(),
              password: z.string().min(6),
            })
            .safeParse(credentials);

          if (!parsedCredentials.success) {
            console.log("❌ Invalid credentials format");
            return null;
          }

          const { email, password } = parsedCredentials.data;
          console.log("🔍 Attempting login for:", email);

          // Tìm người dùng dựa trên email
          const user = await prisma.user.findUnique({
            where: { email: email.toLowerCase() },
          });

          if (!user) {
            console.log("❌ User not found");
            return null;
          }

          console.log("👤 Found user:", user.email, "Role:", user.role);

          // Chỉ cho phép admin và super admin đăng nhập
          if (!["ADMIN_TOUR", "ADMIN_SHOP", "SUPER_ADMIN"].includes(user.role)) {
            console.log("❌ User role not allowed:", user.role);
            return null;
          }

          // Kiểm tra mật khẩu
          let passwordsMatch = false;
          if (user.password) {
            passwordsMatch = await bcrypt.compare(password, user.password);
          }

          if (!passwordsMatch) {
            console.log("❌ Password mismatch");
            return null;
          }

          console.log("✅ Login successful for:", user.email);

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
          };
        } catch (error) {
          console.error("❌ Auth error:", error);
          return null;
        }
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
  trustHost: true,
  debug: process.env.NODE_ENV === "development",
};
