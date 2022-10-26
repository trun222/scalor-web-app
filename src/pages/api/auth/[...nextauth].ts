import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import GitlabProvider from "next-auth/providers/gitlab";
import DiscordProvider from "next-auth/providers/discord";
import Axios from 'axios';
const jwt = require("node-jsonwebtoken");

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_PROVIDER_GITHUB_ID!,
      clientSecret: process.env.OAUTH_PROVIDER_GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.OAUTH_PROVIDER_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.OAUTH_PROVIDER_GOOGLE_CLIENT_SECRET!
    }),
    GitlabProvider({
      clientId: process.env.OAUTH_PROVIDER_GITLAB_CLIENT_ID!,
      clientSecret: process.env.OAUTH_PROVIDER_GITLAB_CLIENT_SECRET!
    }),
    DiscordProvider({
      clientId: process.env.OAUTH_PROVIDER_DISCORD_CLIENT_ID!,
      clientSecret: process.env.OAUTH_PROVIDER_DISCORD_CLIENT_SECRET!,
      // https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
      authorization: {
        params: { scope: ['identify'].join(' ') + ' email' }
      }
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }: any) {
      return '/'
    },
    async session({ session }: any) {
      try {
        const accessToken = jwt.sign(session, process?.env?.NEXT_PUBLIC_TOKEN_PRIVATE_KEY);
        const { contact, usage, token } = await fetch(process?.env?.NEXT_PUBLIC_API_ENDPOINT + '/scalorUser', { headers: { accessToken } }).then(data => data.json());

        if (!token) {
          const axios = Axios.create({
            headers: { accessToken }
          });
          const createdUser: any = await axios.post(process?.env?.NEXT_PUBLIC_API_ENDPOINT + '/signup', {
            email: session.user.email
          })

          session.contact = createdUser?.contact;
          session.usage = createdUser?.usage;
          session.token = createdUser?.token;
          session.accessToken = accessToken;
        }

        // Add the Scalor user data to the session so that it is easily accessible
        session.contact = contact;
        session.usage = usage;
        session.token = token;
        session.accessToken = accessToken;

        return session
      } catch (e) {
        throw new Error('There is an issue with setting the Scalor session');
      }
    }
  }
};

export default NextAuth(authOptions);
