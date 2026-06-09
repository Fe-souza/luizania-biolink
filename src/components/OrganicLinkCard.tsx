import { useState, useRef, MouseEvent, ReactNode } from "react";

interface OrganicLinkCardProps {
  href?: string;
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  variant?: "default" | "featured" | "whatsapp" | "info";
  delay?: number;
}

const OrganicLinkCard = ({
  href,
  icon,
  title,
  subtitle,
  variant = "default",
  delay = 0
}: OrganicLinkCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
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

  const metallicGold =
    "linear-gradient(135deg, #f0e6c2 0%, #f9f0d4 22%, #fdf8e8 48%, #faf3dc 58%, #f5ecc9 78%, #ecdfb3 100%)";

  const styles = {
    bg: "bg-white/95",
    border: "border-black/70",
    glow: "shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)]",
    iconStyle: { background: metallicGold },
    accentColor: "rgba(0,0,0,0.25)",
  };

  const isClickable = !!href;

  const sharedClasses = `
    group relative w-full flex items-center gap-4 p-5
    backdrop-blur-2xl rounded-3xl border
    transition-all duration-200 ease-out
    animate-fade-up
    ${styles.bg} ${styles.border}
  `;

  const sharedStyle = {
    animationDelay: `${delay}s`,
    transform: transform || "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transformStyle: "preserve-3d" as const,
    willChange: "transform",
  };

  const content = (
    <>
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
          className="absolute w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${styles.accentColor} 0%, transparent 50%)`,
            left: "-50%",
            top: "-50%",
          }}
        />
      </div>

      {/* Animated border gradient */}
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `linear-gradient(135deg, ${styles.accentColor} 0%, transparent 40%, transparent 60%, ${styles.accentColor} 100%)`,
        }}
      />

      {/* Icon container with 3D pop effect */}
      {icon && (
        <div
          className="relative flex-shrink-0 w-14 h-14 transition-all duration-300 group-hover:scale-110"
          style={{ transform: "translateZ(30px)" }}
        >
          <div
            className="absolute -inset-1 rounded-2xl blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-70"
            style={{
              background: "linear-gradient(135deg, hsla(43, 90%, 55%, 0.5), hsla(38, 85%, 50%, 0.5))",
            }}
          />
          <div
            className="relative w-full h-full flex items-center justify-center rounded-2xl ring-2 ring-amber-200/50 group-hover:ring-amber-400/60 transition-all duration-300"
            style={{
              ...styles.iconStyle,
              color: "#c89b2a",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(184,134,11,0.18)",
            }}
          >
            {icon}
          </div>
        </div>
      )}

      {/* Text content with 3D depth */}
      <div
        className="flex-1 min-w-0"
        style={{ transform: "translateZ(20px)" }}
      >
        <p className="font-display text-lg md:text-xl font-semibold text-black/90 truncate tracking-wide transition-all duration-300 group-hover:text-black">
          {title}
        </p>
        {subtitle && (
          <p className="text-sm text-black/50 truncate mt-0.5 transition-all duration-300 group-hover:text-black/70">
            {subtitle}
          </p>
        )}
      </div>

      {/* 3D Arrow with depth (only when clickable) */}
      {isClickable && (
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-amber-100/60 backdrop-blur-sm transition-all duration-300 group-hover:bg-amber-200/80 ring-1 ring-amber-400/30 group-hover:ring-amber-500/50"
          style={{ transform: "translateZ(40px)" }}
        >
          <svg
            className="w-5 h-5 text-amber-700 transition-all duration-300 group-hover:text-amber-800 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}

      {/* Subtle floating particles on hover */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-particle"
            style={{
              background: "rgba(212, 175, 55, 0.7)",
              left: `${20 + i * 30}%`,
              bottom: "20%",
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>
    </>
  );

  if (isClickable) {
    return (
      <a
        ref={cardRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
        style={sharedStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={sharedClasses}
      style={sharedStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
};

export default OrganicLinkCard;
