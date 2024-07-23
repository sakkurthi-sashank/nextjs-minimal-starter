import {
  DefaultSession,
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db/kysely";
import { Database, KyselyAdapter } from "@auth/kysely-adapter";
import { Kysely } from "kysely";
import { env } from "../../env";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  adapter: KyselyAdapter(db as Kysely<Database>) as Adapter,
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_ID!,
      clientSecret: env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  secret: env.AUTH_SECRET!,
};

export const getServerAuthSession = () => getServerSession(authOptions);
