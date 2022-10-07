const githubAuth = {
  tokenHost: "https://github.com",
  tokenPath: "/login/oauth/access_token",
  authorizePath: "/login/oauth/authorize",
};

const githubClient = {
  id: process.env.OAUTH_GITHUB_CLIENT_ID!,
  secret: process.env.OAUTH_GITHUB_CLIENT_SECRET!,
};

export const config = {
  client: {
    id: githubClient.id,
    secret: githubClient.secret,
  },
  auth: {
    tokenHost: githubAuth.tokenHost,
    tokenPath: githubAuth.tokenPath,
    authorizePath: githubAuth.authorizePath,
  },
};
