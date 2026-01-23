import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  icon: ReactNode;
  title: string;
  subtitle?: string;
  variant?: "default" | "featured" | "whatsapp";
  delay?: number;
}

const LinkButton = ({ href, icon, title, subtitle, variant = "default", delay = 0 }: LinkButtonProps) => {
  const baseStyles = "group relative w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 animate-fade-up overflow-hidden";
  
  const variantStyles = {
    default: "bg-card/80 border border-border hover:border-gold/50 hover:bg-card",
    featured: "bg-gradient-gold text-primary-foreground shadow-gold",
    whatsapp: "bg-emerald-900/30 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-900/50",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Icon container */}
      <div className={`
        relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl
        transition-transform duration-300 group-hover:scale-110
        ${variant === "featured" ? "bg-white/20" : variant === "whatsapp" ? "bg-emerald-500/20" : "bg-gradient-gold text-primary-foreground"}
      `}>
        {icon}
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0 text-left">
        <p className={`font-medium text-sm md:text-base truncate ${variant === "featured" ? "text-primary-foreground" : "text-foreground"}`}>
          {title}
        </p>
        {subtitle && (
          <p className={`text-xs md:text-sm truncate ${variant === "featured" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Arrow indicator */}
      <div className={`
        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        transition-all duration-300 group-hover:translate-x-1
        ${variant === "featured" ? "bg-white/20" : "bg-muted"}
      `}>
        <svg
          className={`w-4 h-4 ${variant === "featured" ? "text-primary-foreground" : "text-gold"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default LinkButton;
