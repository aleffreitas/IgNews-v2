import { query } from 'faunadb';
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna';

export default NextAuth({

  callbacks: {
    session({ session, token, user }) {
      return session
    },

    async signIn({user, account, profile,  credentials}){
      const isAllowedToSignIn = true;
      const { email } = user;

      if(isAllowedToSignIn){
        await fauna.query(
          query.Create(
            query.Collection("users"),
            { data: { email }}
          )
        )
  
        return true

      } else {
        return false
      }

    }

  },

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,

      scope: 'read:user'
    }),
  ],
})