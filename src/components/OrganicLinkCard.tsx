interface OrganicLinkCardProps {
  href: string;
  image?: string;
  title: string;
  subtitle?: string;
  variant?: "default" | "featured" | "whatsapp";
  delay?: number;
}

const OrganicLinkCard = ({ 
  href, 
  image, 
  title, 
  subtitle, 
  variant = "default", 
  delay = 0 
}: OrganicLinkCardProps) => {
  
  const getVariantStyles = () => {
    switch (variant) {
      case "featured":
        return "bg-gradient-to-br from-rose-500/20 via-purple-500/20 to-pink-500/20 border-rose-300/40 hover:border-rose-300/70 hover:shadow-[0_0_40px_rgba(244,114,182,0.3)]";
      case "whatsapp":
        return "bg-gradient-to-br from-emerald-500/15 via-teal-500/15 to-green-500/15 border-emerald-400/40 hover:border-emerald-400/70 hover:shadow-[0_0_40px_rgba(52,211,153,0.3)]";
      default:
        return "bg-white/10 border-white/20 hover:border-white/40 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]";
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full flex items-center gap-4 p-5
        backdrop-blur-xl rounded-3xl border
        transition-all duration-500 ease-out
        animate-fade-up
        hover:scale-[1.02] hover:-translate-y-1
        ${getVariantStyles()}
      `}
      style={{ 
        animationDelay: `${delay}s`,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Organic morphing border glow */}
      <div 
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: variant === "featured" 
            ? "linear-gradient(90deg, hsla(340, 82%, 76%, 0.5), hsla(280, 70%, 70%, 0.5), hsla(340, 82%, 76%, 0.5))"
            : variant === "whatsapp"
            ? "linear-gradient(90deg, hsla(160, 70%, 50%, 0.5), hsla(140, 70%, 60%, 0.5), hsla(160, 70%, 50%, 0.5))"
            : "linear-gradient(90deg, hsla(0, 0%, 100%, 0.3), hsla(280, 70%, 70%, 0.3), hsla(0, 0%, 100%, 0.3))",
          backgroundSize: "200% 100%",
          animation: "shimmer-border 3s linear infinite",
          filter: "blur(2px)",
          zIndex: -1,
        }}
      />

      {/* Image container with organic shape */}
      {image && (
        <div className="relative flex-shrink-0 w-14 h-14 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <div 
            className="absolute inset-0 rounded-2xl rotate-3 transition-all duration-500 group-hover:rotate-6"
            style={{
              background: variant === "featured" 
                ? "linear-gradient(135deg, hsla(340, 82%, 76%, 0.6), hsla(280, 70%, 70%, 0.6))"
                : variant === "whatsapp"
                ? "linear-gradient(135deg, hsla(160, 70%, 50%, 0.6), hsla(140, 70%, 60%, 0.6))"
                : "linear-gradient(135deg, hsla(0, 0%, 100%, 0.3), hsla(280, 70%, 70%, 0.3))",
            }}
          />
          <img 
            src={image} 
            alt={title} 
            className="relative w-full h-full object-cover rounded-2xl"
          />
        </div>
      )}

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <p className="font-display text-lg md:text-xl font-semibold text-white/95 truncate tracking-wide">
          {title}
        </p>
        {subtitle && (
          <p className="text-sm text-white/60 truncate mt-0.5">
            {subtitle}
          </p>
        )}
      </div>

      {/* Organic arrow */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur transition-all duration-500 group-hover:bg-white/20 group-hover:translate-x-1">
        <svg
          className="w-5 h-5 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5"
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

export default OrganicLinkCard;
