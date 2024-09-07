import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";

const handlers = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;
        const checkPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!checkPassword) {
          return null;
        } else {
          return {
            id: user._id,
            email: user.email,
            role: user.role,
            firstName: user.firstName,
          };
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "credentials") {
        return true;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.firstName = user.firstName;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.firstName = token.firstName;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handlers as GET, handlers as POST };
