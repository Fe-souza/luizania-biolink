import { Instagram } from "lucide-react";

const OrganicSocialIcons = () => {
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/jhee.s/", label: "Instagram" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110"
          style={{
            background: "linear-gradient(135deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0.05))",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Hover glow */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, hsla(43, 50%, 55%, 0.4), hsla(0, 0%, 65%, 0.35))",
              filter: "blur(8px)",
            }}
          />
          <Icon className="relative w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
};

export default OrganicSocialIcons;
