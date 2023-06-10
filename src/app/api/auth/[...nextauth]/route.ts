import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import connectDB from "@/utils/mongoose";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // Handle the case when profile is undefined
      if (!profile) return false

      await connectDB();
      const existingUser = await User.findOne({ email: profile.email });

      if (!existingUser) {
        await User.create({ email: profile.email, name: profile.name })
      }

      return true
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }