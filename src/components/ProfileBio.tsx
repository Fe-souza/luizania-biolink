const ProfileBio = () => {
  return (
    <div className="text-center space-y-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold tracking-wide">
        Ana Maria 
      </h1>
      
      <div className="space-y-2">
        <p className="text-foreground/90 font-light text-sm md:text-base tracking-wider uppercase">
          ✨ Idealizadora de Eventos Beauty ✨
        </p>
        
        <p className="text-muted-foreground text-sm md:text-base max-w-xs mx-auto leading-relaxed">
          CEO <span className="text-gold font-medium">Beauty</span> • Empreendedora há 6+ anos
          <br />
          Palestrante premiada em SC
          <br />
          <span className="text-rose-light italic">Ensino mulheres a viverem de cílios</span>
        </p>
      </div>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="w-2 h-2 rotate-45 bg-gold" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    </div>
  );
};

export default ProfileBio;
