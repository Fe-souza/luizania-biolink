import { Instagram } from "lucide-react";

const OrganicSocialIcons = () => {
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/juliana_klagenberg_beauty?igsh=MWF1OHljbzl0YTYwdA==", label: "Instagram" },
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
            background: "linear-gradient(135deg, hsla(43, 70%, 55%, 0.15), hsla(38, 60%, 50%, 0.1))",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, hsla(43, 80%, 55%, 0.35), hsla(38, 70%, 50%, 0.3))",
              filter: "blur(8px)",
            }}
          />
          <Icon className="relative w-5 h-5 text-amber-700/70 group-hover:text-amber-800 transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
};

export default OrganicSocialIcons;
