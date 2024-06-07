import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { User } from "./lib/definitions";
import { db } from "@/lib/db";
import { getUserById } from "./lib/data";
import { PrismaAdapter } from "@auth/prisma-adapter";

async function getUser(username: string) {
  try {
    const user = await db.user.findUnique({
      where: { username: username },
    });

    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    async session({ token, session }) {
      console.log({ sessionToken: token });
      console.log({ session });

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      console.log({ session });
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.isAdmin;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
