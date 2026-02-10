import profileImage from "@/assets/juliana.png";

const OrganicProfileAvatar = () => {
  return (
    <div className="relative animate-scale-in">
      {/* Floating organic rings - gray with subtle gold */}
      <div
        className="absolute -inset-6 rounded-full animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, transparent, hsla(43, 70%, 55%, 0.4), transparent, hsla(38, 80%, 50%, 0.35), transparent)",
        }}
      />
      <div
        className="absolute -inset-4 rounded-full animate-spin-reverse"
        style={{
          background: "conic-gradient(from 180deg, transparent, hsla(38, 80%, 50%, 0.3), transparent, hsla(43, 70%, 55%, 0.25), transparent)",
        }}
      />

      {/* Glow effect - softer, gray-gold */}
      <div
        className="absolute inset-0 rounded-full blur-2xl animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, hsla(43, 80%, 55%, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Main avatar container */}
      <div
        className="relative p-1 rounded-full"
        style={{
          background: "linear-gradient(135deg, hsla(43, 80%, 55%, 0.9), hsla(38, 70%, 50%, 1), hsla(43, 80%, 55%, 0.9))",
        }}
      >
        <div className="p-1 rounded-full bg-white/95 backdrop-blur-xl">
          <img
            src={profileImage}
            alt="Juliana Klagenberg"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Floating organic decorations - gray-gold */}
      <div
        className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(43, 80%, 55%, 0.7)",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute -bottom-2 -left-4 w-4 h-4 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(38, 70%, 50%, 0.7)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute top-1/2 -right-6 w-3 h-3 rounded-full animate-float-organic border-2 bg-transparent"
        style={{
          borderColor: "hsla(43, 80%, 55%, 0.6)",
          animationDelay: "3s",
        }}
      />
    </div>
  );
};

export default OrganicProfileAvatar;
