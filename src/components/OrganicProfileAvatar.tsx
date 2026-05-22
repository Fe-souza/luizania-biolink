import profileImage from "@/assets/profile.jpg";

const OrganicProfileAvatar = () => {
  return (
    <div className="relative animate-scale-in">
      {/* Floating organic rings - gold on dark */}
      <div
        className="absolute -inset-6 rounded-full animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, transparent, hsla(43, 90%, 60%, 0.6), transparent, hsla(38, 85%, 55%, 0.5), transparent)",
        }}
      />
      <div
        className="absolute -inset-4 rounded-full animate-spin-reverse"
        style={{
          background: "conic-gradient(from 180deg, transparent, hsla(38, 90%, 55%, 0.45), transparent, hsla(43, 85%, 60%, 0.4), transparent)",
        }}
      />

      {/* Glow effect - golden halo on dark */}
      <div
        className="absolute inset-0 rounded-full blur-2xl animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, hsla(43, 90%, 55%, 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Main avatar container - metallic gold ring */}
      <div
        className="relative p-[3px] rounded-full"
        style={{
          background:
            "conic-gradient(from 140deg, #8a6a1f 0deg, #d4af37 45deg, #fff3b0 90deg, #f5d76e 135deg, #b8860b 180deg, #fff3b0 225deg, #d4af37 270deg, #7a5d18 315deg, #8a6a1f 360deg)",
          boxShadow:
            "0 0 0 1px rgba(255, 243, 176, 0.25), 0 8px 30px -8px rgba(212, 175, 55, 0.55)",
        }}
      >
        <div className="p-1 rounded-full bg-black/85 backdrop-blur-xl">
          <img
            src={profileImage}
            alt="Luizania"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Floating organic decorations - gold */}
      <div
        className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(43, 90%, 60%, 0.85)",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute -bottom-2 -left-4 w-4 h-4 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(38, 80%, 55%, 0.85)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute top-1/2 -right-6 w-3 h-3 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(43, 90%, 60%, 0.75)",
          animationDelay: "3s",
        }}
      />
    </div>
  );
};

export default OrganicProfileAvatar;
