import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({

  callbacks: {
    session({ session, token, user }) {
      return session
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