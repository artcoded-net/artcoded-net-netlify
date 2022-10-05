import { Enum_Componentconfigsociallink_Socialmedia } from "../data/generated";
import GithubIcon from "./icons/Github";
import TwitterIcon from "./icons/Twitter";
import YouTubeIcon from "./icons/YouTube";

interface SocialIconProps {
  href: string;
  dimension: number;
  socialMedia: Enum_Componentconfigsociallink_Socialmedia;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  socialMedia,
  dimension,
}) => {
  let Icon: React.FC;
  switch (socialMedia) {
    case Enum_Componentconfigsociallink_Socialmedia.Github:
      Icon = () => <GithubIcon dimension={dimension} />;
      break;
    case Enum_Componentconfigsociallink_Socialmedia.Youtube:
      Icon = () => <YouTubeIcon dimension={dimension} />;
      break;
    case Enum_Componentconfigsociallink_Socialmedia.Twitter:
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
