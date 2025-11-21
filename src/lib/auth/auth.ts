import NextAuth from "next-auth";
import "./types";
import { authConfig } from "./authConfig";

const { handlers, signIn, signOut, auth } = NextAuth(authConfig);

export { handlers, signIn, signOut, auth };
