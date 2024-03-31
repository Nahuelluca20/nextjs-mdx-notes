import {NextAuthConfig} from "next-auth";
import {DrizzleAdapter} from "@auth/drizzle-adapter";

import {db} from "@/db";

export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET!,
  adapter: DrizzleAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [],
  callbacks: {},
} satisfies NextAuthConfig;
