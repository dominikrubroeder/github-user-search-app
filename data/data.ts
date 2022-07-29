export interface IGitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: null | string;
  company: null | string;
  blog: string;
  location: null | string;
  email: null | string;
  hireable: null | string;
  bio: null | string;
  twitter_username: null | string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const defaultGitHubUser: IGitHubUser = {
  login: 'theoctocat',
  id: 10826353,
  node_id: 'MDEyOk9yZ2FuaXphdGlvbjEwODI2MzUz',
  avatar_url: 'https://avatars.githubusercontent.com/u/10826353?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/theoctocat',
  html_url: 'https://github.com/theoctocat',
  followers_url: 'https://api.github.com/users/theoctocat/followers',
  following_url:
    'https://api.github.com/users/theoctocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/theoctocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/theoctocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/theoctocat/subscriptions',
  organizations_url: 'https://api.github.com/users/theoctocat/orgs',
  repos_url: 'https://api.github.com/users/theoctocat/repos',
  events_url: 'https://api.github.com/users/theoctocat/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/theoctocat/received_events',
  type: 'Organization',
  site_admin: false,
  name: 'The Octocat',
  company: 'GitHub',
  blog: '',
  location: 'San Francisco',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 0,
  followers: 3938,
  following: 9,
  created_at: '2015-02-03T07:56:26Z',
  updated_at: '2015-02-03T07:56:26Z',
};

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export interface IconProps {
  fill?: string;
}
