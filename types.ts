export interface Link {
  href: string;
  label: string;
}

export enum SocialNetwork {
  GITHUB,
  YOUTUBE,
  TWITTER,
}

export interface SocialLink {
  social: SocialNetwork;
  url: string;
}
