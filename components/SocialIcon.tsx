import { SocialNetwork } from "../types";
import GithubIcon from "./icons/Github";
import TwitterIcon from "./icons/Twitter";
import YouTubeIcon from "./icons/YouTube";

interface SocialIconProps {
  href: string;
  dimension: number;
  socialMedia: SocialNetwork;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  socialMedia,
  dimension,
}) => {
  let Icon: React.FC;
  switch (socialMedia) {
    case SocialNetwork.GITHUB:
      Icon = () => <GithubIcon dimension={dimension} />;
      break;
    case SocialNetwork.YOUTUBE:
      Icon = () => <YouTubeIcon dimension={dimension} />;
      break;
    case SocialNetwork.TWITTER:
      Icon = () => <TwitterIcon dimension={dimension} />;
      break;
    default:
      Icon = () => <GithubIcon dimension={dimension} />;
  }

  return (
    <a href={href}>
      <Icon />
      <span className="sr-only">{socialMedia}</span>
    </a>
  );
};

export default SocialIcon;
