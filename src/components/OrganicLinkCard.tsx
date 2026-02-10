import { useState, useRef, MouseEvent } from "react";

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
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 8;
    const rotateY = (centerX - x) / 8;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePosition({ x: 50, y: 50 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "featured":
        return {
          bg: "bg-gradient-to-br from-amber-100/80 via-yellow-50/70 to-orange-50/60",
          border: "border-amber-400/50",
          glow: "shadow-[0_20px_50px_-15px_rgba(251,191,36,0.3)]",
          accent: "from-amber-400/60 via-yellow-300/40 to-amber-500/60",
        };
      case "whatsapp":
        return {
          bg: "bg-gradient-to-br from-emerald-50/80 via-teal-50/70 to-green-50/60",
          border: "border-emerald-400/40",
          glow: "shadow-[0_20px_50px_-15px_rgba(52,211,153,0.25)]",
          accent: "from-emerald-400/50 via-teal-300/30 to-emerald-500/50",
        };
      default:
        return {
          bg: "bg-white/70",
          border: "border-amber-300/30",
          glow: "shadow-[0_20px_50px_-15px_rgba(251,191,36,0.15)]",
          accent: "from-amber-400/30 via-yellow-300/20 to-amber-500/30",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full flex items-center gap-4 p-5
        backdrop-blur-2xl rounded-3xl border
        transition-all duration-200 ease-out
        animate-fade-up
        ${styles.bg} ${styles.border}
      `}
      style={{
        animationDelay: `${delay}s`,
        transform: transform || "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D depth shadow layer */}
      <div
        className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl ${styles.glow}`}
      />

      {/* Glare/shine effect that follows cursor */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
        style={{ transform: "translateZ(1px)" }}
      >
        <div
          className={`absolute w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(251,191,36,0.12) 0%, transparent 50%)`,
            left: "-50%",
            top: "-50%",
          }}
        />
      </div>

      {/* Animated border gradient */}
      <div
        className={`absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
        style={{
          background: `linear-gradient(135deg, ${variant === "whatsapp" ? "rgba(52,211,153,0.3)" : "rgba(251,191,36,0.3)"} 0%, transparent 40%, transparent 60%, ${variant === "whatsapp" ? "rgba(52,211,153,0.3)" : "rgba(251,191,36,0.3)"} 100%)`,
        }}
      />

      {/* Image container with 3D pop effect */}
      {image && (
        <div
          className="relative flex-shrink-0 w-14 h-14 transition-all duration-300 group-hover:scale-110"
          style={{ transform: "translateZ(30px)" }}
        >
          <div
            className="absolute -inset-1 rounded-2xl blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-70"
            style={{
              background: variant === "featured"
                ? "linear-gradient(135deg, hsla(45, 90%, 55%, 0.5), hsla(35, 85%, 50%, 0.5))"
                : variant === "whatsapp"
                ? "linear-gradient(135deg, hsla(160, 70%, 50%, 0.4), hsla(140, 70%, 55%, 0.4))"
                : "linear-gradient(135deg, hsla(45, 90%, 55%, 0.25), hsla(35, 85%, 50%, 0.25))",
            }}
          />
          <img
            src={image}
            alt={title}
            className="relative w-full h-full object-cover rounded-2xl ring-2 ring-amber-200/30 group-hover:ring-amber-400/40 transition-all duration-300"
          />
        </div>
      )}

      {/* Text content with 3D depth */}
      <div
        className="flex-1 min-w-0"
        style={{ transform: "translateZ(20px)" }}
      >
        <p className="font-display text-lg md:text-xl font-semibold text-amber-900/85 truncate tracking-wide transition-all duration-300 group-hover:text-amber-900">
          {title}
        </p>
        {subtitle && (
          <p className="text-sm text-amber-800/45 truncate mt-0.5 transition-all duration-300 group-hover:text-amber-800/65">
            {subtitle}
          </p>
        )}
      </div>

      {/* 3D Arrow with depth */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-amber-100/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-amber-200/60 ring-1 ring-amber-300/20 group-hover:ring-amber-400/30"
        style={{ transform: "translateZ(40px)" }}
      >
        <svg
          className="w-5 h-5 text-amber-700/50 transition-all duration-300 group-hover:text-amber-700/80 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Subtle floating particles on hover */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-particle"
            style={{
              background: variant === "whatsapp"
                ? "rgba(52, 211, 153, 0.6)"
                : "rgba(251, 191, 36, 0.6)",
              left: `${20 + i * 30}%`,
              bottom: "20%",
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>
    </a>
  );
};

export default OrganicLinkCard;
