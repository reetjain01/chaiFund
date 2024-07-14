
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import mongoose, { connect } from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';

export const authOptions =  NextAuth({
    providers: [
      // OAuth authentication providers...
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
        redirect_uri:"https://chai-fund.vercel.app/api/auth/callback/github"
      }),
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    //   }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    //   }),
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    //   }),
    //   // Passwordless / email sign in
    //   EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    //   }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if(account.provider === "github"){
          await connectDB()
          // check if the user already exist in the database
          const currentUser = await User.findOne({email : email})
         
          if(!currentUser){
            // create a new user
            const newUser = await User.create({
              email : user.email,
              username : user.email.split("@")[0]
            })
            user.name = newUser.username
            
          }
          else{
            user.name = currentUser.username
          }
          return true
        }
      },
      async session({ session, user, token }){
        const dbUser = await User.findOne({email : session.user.email})
        
        session.user.name = dbUser.username
        return session
      }
    }
  })

export {authOptions as GET, authOptions as POST};