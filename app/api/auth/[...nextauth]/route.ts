import mongoose from "mongoose";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/app/models/User"
import Payment from "@/app/models/Payment"

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({user, account, profile, email, credentials}){
      if(account?.provider=='github'){
        // connect to the database
        const client = await mongoose.connect()
      }

      return true;
    }
  }
})

export {handler as GET, handler as POST}