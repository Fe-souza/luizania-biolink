import profileImage from "@/assets/jessica.png";

const OrganicProfileAvatar = () => {
  return (
    <div className="relative animate-scale-in">
      {/* Floating organic rings - gray with subtle gold */}
      <div
        className="absolute -inset-6 rounded-full animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, transparent, hsla(0, 0%, 70%, 0.3), transparent, hsla(43, 50%, 50%, 0.25), transparent)",
        }}
      />
      <div
        className="absolute -inset-4 rounded-full animate-spin-reverse"
        style={{
          background: "conic-gradient(from 180deg, transparent, hsla(43, 40%, 60%, 0.2), transparent, hsla(0, 0%, 65%, 0.18), transparent)",
        }}
      />

      {/* Glow effect - softer, gray-gold */}
      <div
        className="absolute inset-0 rounded-full blur-2xl animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, hsla(43, 50%, 55%, 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Main avatar container */}
      <div
        className="relative p-1 rounded-full"
        style={{
          background: "linear-gradient(135deg, hsla(0, 0%, 60%, 0.7), hsla(43, 50%, 50%, 0.8), hsla(0, 0%, 65%, 0.7))",
        }}
      >
        <div className="p-1 rounded-full bg-[#18181b]/95 backdrop-blur-xl">
          <img
            src={profileImage}
            alt="Jéssica Santos"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Floating organic decorations - gray-gold */}
      <div
        className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-float-organic"
        style={{
          background: "linear-gradient(135deg, hsla(43, 50%, 55%, 0.8), hsla(0, 0%, 65%, 0.6))",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute -bottom-2 -left-4 w-4 h-4 rounded-full animate-float-organic"
        style={{
          background: "linear-gradient(135deg, hsla(0, 0%, 70%, 0.8), hsla(43, 45%, 55%, 0.6))",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute top-1/2 -right-6 w-3 h-3 rounded-full animate-float-organic"
        style={{
          background: "linear-gradient(135deg, hsla(43, 40%, 50%, 0.7), hsla(0, 0%, 60%, 0.6))",
          animationDelay: "3s",
        }}
      />
    </div>
  );
};

export default OrganicProfileAvatar;
