import { FaFacebookF, FaXTwitter, FaBehance, FaDribbble } from "react-icons/fa6";
import { socialLinks } from "../data/socialLinks";

const iconComponents = {
  FaFacebookF,
  FaXTwitter,
  FaBehance,
  FaDribbble,
};

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ name, url, icon }) => {
        const IconComponent = iconComponents[icon];
        return (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            {IconComponent && <IconComponent size={16} />}
          </a>
        );
      })}
    </div>
  );
}
