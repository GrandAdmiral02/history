import NextAuth from "next-auth";
import "./types";
import { authConfig } from "./authConfig";

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
