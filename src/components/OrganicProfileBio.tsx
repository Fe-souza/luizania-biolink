const OrganicProfileBio = () => {
  return (
    <div className="text-center space-y-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h1
        className="text-5xl md:text-6xl font-bold tracking-wide pb-3"
        style={{
          fontFamily: "'Gwendolyn', cursive",
          background:
            "linear-gradient(135deg, #8a6a1f 0%, #d4af37 18%, #fff3b0 38%, #f5d76e 50%, #fff3b0 62%, #d4af37 82%, #7a5d18 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.45)) drop-shadow(0 0 18px rgba(212,175,55,0.35))",
        }}
      >
        Luizania
      </h1>

      <div className="space-y-3">
        <p
          className="font-light text-sm md:text-base tracking-[0.3em] uppercase"
          style={{
            background:
              "linear-gradient(90deg, #8a6a1f 0%, #d4af37 25%, #fff3b0 50%, #d4af37 75%, #8a6a1f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Nails & Sobrancelhas
        </p>

        <p className="text-white/75 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
          <span className="text-amber-400">✨</span> Nails Designer
          <br />
          <span className="text-amber-400">✨</span> Designer de Sobrancelhas
          <br />
          <span className="italic text-amber-300/80">👇 Agende seu horário</span>
        </p>
      </div>

      {/* Organic divider - metallic */}
      <div className="flex items-center justify-center gap-4 pt-3">
        <div
          className="w-16 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #8a6a1f, #fff3b0, #d4af37, transparent)",
          }}
        />
        <div
          className="w-3 h-3 rounded-full animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #fff3b0 0%, #d4af37 40%, #8a6a1f 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,243,176,0.6), 0 0 12px rgba(212,175,55,0.6)",
          }}
        />
        <div
          className="w-16 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #d4af37, #fff3b0, #8a6a1f, transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default OrganicProfileBio;
