const OrganicProfileBio = () => {
  return (
    <div className="text-center space-y-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h1 
        className="font-display text-4xl md:text-5xl font-semibold tracking-wide"
        style={{
          background: "linear-gradient(135deg, #fff 0%, hsla(340, 82%, 85%, 1) 50%, hsla(280, 70%, 80%, 1) 100%)",
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
            background: "linear-gradient(90deg, hsla(340, 82%, 76%, 0.9), hsla(280, 70%, 70%, 0.9))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ✨ Idealizadora de Eventos Beauty ✨
        </p>
        
        <p className="text-white/70 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
          CEO <span className="text-rose-300 font-medium">JK Beauty</span> • Empreendedora há 6+ anos
          <br />
          Palestrante premiada em SC
          <br />
          <span className="italic text-purple-300/90">Ensino mulheres a viverem de cílios</span>
        </p>
      </div>

      {/* Organic divider */}
      <div className="flex items-center justify-center gap-4 pt-3">
        <div 
          className="w-16 h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsla(340, 82%, 76%, 0.6), transparent)",
          }}
        />
        <div 
          className="w-3 h-3 rounded-full animate-pulse-slow"
          style={{
            background: "linear-gradient(135deg, hsla(340, 82%, 76%, 0.8), hsla(280, 70%, 70%, 0.8))",
          }}
        />
        <div 
          className="w-16 h-[2px] rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, hsla(280, 70%, 70%, 0.6), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default OrganicProfileBio;
