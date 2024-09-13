import bcrypt from "bcryptjs";
import User from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/dbConnect";
export const options = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await dbConnect();
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("User not found");
          }
          const match = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!match) {
            throw new Error("Invalid password");
          }

          // fix user role
          return {
            ...user,
            role: user.role,
            email: user.email,
            firstName: user.firstName,
          };
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.role = user.role;
        token.firstName = user.firstName;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.firstName = token.firstName;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
