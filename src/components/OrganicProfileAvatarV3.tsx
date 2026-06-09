import profileImage from "@/assets/profile2.jpg";

const OrganicProfileAvatarV3 = () => {
  return (
    <div className="relative animate-scale-in">
      {/* Floating organic rings - silver halo */}
      <div
        className="absolute -inset-6 rounded-full animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, transparent, hsla(220, 8%, 75%, 0.5), transparent, hsla(220, 6%, 70%, 0.4), transparent)",
        }}
      />
      <div
        className="absolute -inset-4 rounded-full animate-spin-reverse"
        style={{
          background: "conic-gradient(from 180deg, transparent, hsla(220, 8%, 78%, 0.4), transparent, hsla(220, 6%, 72%, 0.35), transparent)",
        }}
      />

      {/* Glow effect - soft silver halo */}
      <div
        className="absolute inset-0 rounded-full blur-2xl animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, hsla(220, 8%, 78%, 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Main avatar container - light metallic silver ring */}
      <div
        className="relative p-[3px] rounded-full"
        style={{
          background:
            "conic-gradient(from 140deg, #c5c5c8 0deg, #d8d8db 45deg, #f4f4f6 90deg, #e0e0e3 135deg, #b8b8bb 180deg, #f4f4f6 225deg, #d8d8db 270deg, #aeaeb2 315deg, #c5c5c8 360deg)",
          boxShadow:
            "0 0 0 1px rgba(220, 220, 224, 0.6), 0 8px 30px -8px rgba(160, 160, 168, 0.4)",
        }}
      >
        <div className="p-1 rounded-full bg-white/85 backdrop-blur-xl">
          <img
            src={profileImage}
            alt="Luizania"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Floating organic decorations - silver */}
      <div
        className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(220, 8%, 70%, 0.85)",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute -bottom-2 -left-4 w-4 h-4 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(220, 6%, 70%, 0.85)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute top-1/2 -right-6 w-3 h-3 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(220, 8%, 70%, 0.8)",
          animationDelay: "3s",
        }}
      />
    </div>
  );
};

export default OrganicProfileAvatarV3;
