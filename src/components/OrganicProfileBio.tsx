const OrganicProfileBio = () => {
  return (
    <div className="text-center space-y-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h1
        className="text-5xl md:text-6xl font-bold tracking-wide pb-3"
        style={{
          fontFamily: "'Gwendolyn', cursive",
          background:
            "linear-gradient(135deg, #4a4a4d 0%, #6b6b6f 18%, #9c9ca0 38%, #888890 50%, #9c9ca0 62%, #6b6b6f 82%, #3d3d40 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.5)) drop-shadow(0 0 18px rgba(160,160,168,0.25))",
        }}
      >
        Luizania
      </h1>

      <div className="space-y-3">
        <p
          className="font-light text-sm md:text-base tracking-[0.3em] uppercase"
          style={{
            background:
              "linear-gradient(90deg, #6b4f15 0%, #b8860b 25%, #d4af37 50%, #b8860b 75%, #6b4f15 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Nails & Sobrancelhas
        </p>

        <p className="text-stone-700 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
          <span className="text-amber-600">✨</span> Nails Designer
          <br />
          <span className="text-amber-600">✨</span> Designer de Sobrancelhas
        </p>
      </div>

      {/* Organic divider - metallic gold */}
      <div className="flex items-center justify-center gap-4 pt-3">
        <div
          className="w-16 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #6b4f15, #d4af37, #b8860b, transparent)",
          }}
        />
        <div
          className="w-3 h-3 rounded-full animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #fff3b0 0%, #d4af37 40%, #8a6a1f 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,243,176,0.6), 0 0 12px rgba(212,175,55,0.5)",
          }}
        />
        <div
          className="w-16 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #b8860b, #d4af37, #6b4f15, transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default OrganicProfileBio;
