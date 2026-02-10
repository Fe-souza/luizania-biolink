const OrganicProfileBio = () => {
  return (
    <div className="text-center space-y-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h1
        className="text-5xl md:text-6xl font-bold tracking-wide pb-3"
        style={{
          fontFamily: "'Gwendolyn', cursive",
          background: "linear-gradient(135deg, hsla(38, 80%, 40%, 1) 0%, hsla(43, 90%, 45%, 1) 50%, hsla(38, 70%, 35%, 1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Juliana Klagenberg
      </h1>

      <div className="space-y-3">
        <p
          className="font-light text-sm md:text-base tracking-[0.3em] uppercase"
          style={{
            background: "linear-gradient(90deg, hsla(43, 70%, 40%, 0.95), hsla(38, 60%, 35%, 0.95))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Beauty & Empreendedorismo
        </p>

        <p className="text-amber-900/60 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
          <span className="text-amber-600/90">✨</span> Idealizadora de eventos Beauty
          <br />
          <span className="text-amber-600/90">👩‍💻</span> CEO JK Beauty • Palestrante • Embaixadora JD Lashes
          <br />
          <span className="italic text-amber-700/70">👇 Ensino mulheres a viverem de cílios</span>
        </p>
      </div>

      {/* Organic divider */}
      <div className="flex items-center justify-center gap-4 pt-3">
        <div 
          className="w-16 h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsla(43, 70%, 50%, 0.5), transparent)",
          }}
        />
        <div
          className="w-3 h-3 rounded-full animate-pulse-slow"
          style={{
            background: "linear-gradient(135deg, hsla(43, 80%, 50%, 0.9), hsla(38, 70%, 45%, 0.9))",
          }}
        />
        <div
          className="w-16 h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsla(38, 70%, 45%, 0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default OrganicProfileBio;
