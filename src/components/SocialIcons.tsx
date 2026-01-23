import { Instagram, Youtube, Facebook } from "lucide-react";

const SocialIcons = () => {
  const socials = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group w-11 h-11 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 hover:bg-muted transition-all duration-300 hover:scale-110"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
