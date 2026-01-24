const OrganicProfileBio = () => {
  return (
    <div className="text-center space-y-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h1 
        className="font-display text-4xl md:text-5xl font-semibold tracking-wide"
        style={{
          background: "linear-gradient(135deg, #fff 0%, hsla(45, 90%, 75%, 1) 50%, hsla(35, 85%, 65%, 1) 100%)",
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
            background: "linear-gradient(90deg, hsla(45, 90%, 70%, 0.95), hsla(35, 85%, 60%, 0.95))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ✨ Idealizadora de Eventos Beauty ✨
        </p>
        
        <p className="text-white/70 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
          CEO <span className="text-amber-300 font-medium">JK Beauty</span> • Empreendedora há 6+ anos
          <br />
          Palestrante premiada em SC
          <br />
          <span className="italic text-yellow-200/90">Ensino mulheres a viverem de cílios</span>
        </p>
      </div>

      {/* Organic divider */}
      <div className="flex items-center justify-center gap-4 pt-3">
        <div 
          className="w-16 h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsla(45, 90%, 60%, 0.6), transparent)",
          }}
        />
        <div 
          className="w-3 h-3 rounded-full animate-pulse-slow"
          style={{
            background: "linear-gradient(135deg, hsla(45, 90%, 60%, 0.9), hsla(35, 85%, 55%, 0.9))",
          }}
        />
        <div 
          className="w-16 h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsla(35, 85%, 55%, 0.6), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default OrganicProfileBio;
