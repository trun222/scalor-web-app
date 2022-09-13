import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import GitlabProvider from "next-auth/providers/gitlab";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
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
})
