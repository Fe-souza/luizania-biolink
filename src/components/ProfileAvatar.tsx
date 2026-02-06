import profileImage from "@/assets/profile-avatar.jpg";

const ProfileAvatar = () => {
  return (
    <div className="relative animate-scale-in">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-60 blur-xl animate-pulse-gold" />
      
      {/* Decorative ring */}
      <div className="relative p-1 rounded-full bg-gradient-gold shadow-glow">
        <div className="p-1 rounded-full bg-background">
          <img
            src={profileImage}
            alt="Ana Maria "
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Floating sparkle decorations */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full animate-float opacity-80" style={{ animationDelay: '0s' }} />
      <div className="absolute -bottom-1 -left-3 w-3 h-3 bg-gold-light rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 -right-4 w-2 h-2 bg-rose rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default ProfileAvatar;
