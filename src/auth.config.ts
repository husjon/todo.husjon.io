import GithubProvider from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
} satisfies NextAuthConfig;
