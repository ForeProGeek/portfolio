import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const icons = [
  { Icon: FaFacebookF, url: "https://facebook.com", label: "Facebook" },
  { Icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
  { Icon: FaLinkedinIn, url: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaGithub, url: "https://github.com", label: "GitHub" },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {icons.map(({ Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}
