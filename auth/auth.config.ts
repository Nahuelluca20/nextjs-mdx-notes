import {NextAuthConfig} from "next-auth";
import {DrizzleAdapter} from "@auth/drizzle-adapter";
import Github from "next-auth/providers/github";

import {db} from "@/db";

export const authConfig = {
  secret: process.env.AUTH_SECRET!,
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [Github],
  callbacks: {},
} satisfies NextAuthConfig;
