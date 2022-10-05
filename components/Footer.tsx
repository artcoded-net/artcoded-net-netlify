import { link } from "fs";
import { Maybe } from "graphql/jsutils/Maybe";
import { ComponentConfigSocialLink, Scalars } from "../data/generated";
import SocialIcon from "./SocialIcon";

interface FooterProps {
  companyName: string;
  companyEmail: string;
  companyAddress?: string;
  socialLinks?: Maybe<Array<Omit<ComponentConfigSocialLink, "id"> | null>>;
  vat?: Maybe<Scalars["String"]>;
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  companyEmail,
  companyAddress,
  socialLinks,
  vat,
}) => (
  <div className="flex flex-col items-center space-y-2 py-16">
    {socialLinks && (
      <div className="flex space-x-4">
        {socialLinks.map(
          (socialLink) =>
            socialLink && (
              <SocialIcon
                href={socialLink.link}
                dimension={8}
                socialMedia={socialLink.socialMedia}
              />
            )
        )}
      </div>
    )}
    <a
      href={`mailto:${companyEmail}`}
      className="hover:underline font-medium text-brand"
    >
      {companyEmail}
    </a>
    <p>{`© ${companyName} 2022  |  VAT ${vat} |  ${companyAddress}`}</p>
  </div>
);

export default Footer;
