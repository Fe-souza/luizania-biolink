const OrganicProfileBio = () => {
  return (
    <div className="text-center space-y-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h1
        className="font-display text-4xl md:text-5xl font-semibold tracking-wide"
        style={{
          background: "linear-gradient(135deg, #fff 0%, hsla(43, 80%, 72%, 1) 50%, hsla(38, 70%, 60%, 1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Jéssica Santos
      </h1>

      <div className="space-y-3">
        <p
          className="font-light text-sm md:text-base tracking-[0.3em] uppercase"
          style={{
            background: "linear-gradient(90deg, hsla(43, 80%, 68%, 0.95), hsla(38, 70%, 58%, 0.95))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Cursos & Mentorias
        </p>

        <p className="text-white/70 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
          <span className="text-amber-300/90">⏰</span> Cílios perfeitos em 40 minutos
          <br />
          <span className="text-amber-300/90">👩‍💻</span> Educadora • Palestrante • Embaixadora
          <br />
          <span className="italic text-amber-200/80">👇 Transforme a sua carreira aqui</span>
        </p>
      </div>

      {/* Organic divider */}
      <div className="flex items-center justify-center gap-4 pt-3">
        <div 
          className="w-16 h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsla(43, 60%, 55%, 0.5), transparent)",
          }}
        />
        <div
          className="w-3 h-3 rounded-full animate-pulse-slow"
          style={{
            background: "linear-gradient(135deg, hsla(43, 70%, 55%, 0.8), hsla(38, 60%, 50%, 0.8))",
          }}
        />
        <div
          className="w-16 h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsla(38, 60%, 50%, 0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default OrganicProfileBio;
