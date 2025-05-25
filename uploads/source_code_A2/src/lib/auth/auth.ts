import NextAuth from "next-auth";
import "./types";
import { authOptions } from "./authConfig"; // Sửa từ authConfig thành authOptions

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions); // Sửa authConfig thành authOptions