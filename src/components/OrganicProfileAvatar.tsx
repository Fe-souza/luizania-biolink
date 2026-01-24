import profileImage from "@/assets/profile-avatar.jpg";

const OrganicProfileAvatar = () => {
  return (
    <div className="relative animate-scale-in">
      {/* Floating organic rings */}
      <div 
        className="absolute -inset-6 rounded-full animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, transparent, hsla(340, 82%, 76%, 0.3), transparent, hsla(280, 70%, 70%, 0.3), transparent)",
        }}
      />
      <div 
        className="absolute -inset-4 rounded-full animate-spin-reverse"
        style={{
          background: "conic-gradient(from 180deg, transparent, hsla(45, 90%, 75%, 0.2), transparent, hsla(170, 70%, 70%, 0.2), transparent)",
        }}
      />
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, hsla(340, 82%, 76%, 0.5) 0%, transparent 70%)",
        }}
      />
      
      {/* Main avatar container */}
      <div 
        className="relative p-1 rounded-full"
        style={{
          background: "linear-gradient(135deg, hsla(340, 82%, 76%, 0.8), hsla(280, 70%, 70%, 0.8), hsla(45, 90%, 75%, 0.8))",
        }}
      >
        <div className="p-1 rounded-full bg-black/90 backdrop-blur-xl">
          <img
            src={profileImage}
            alt="Juliana Klagenberg"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Floating organic decorations */}
      <div 
        className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-float-organic"
        style={{
          background: "linear-gradient(135deg, hsla(340, 82%, 76%, 0.8), hsla(280, 70%, 70%, 0.6))",
          animationDelay: "0s",
        }} 
      />
      <div 
        className="absolute -bottom-2 -left-4 w-4 h-4 rounded-full animate-float-organic"
        style={{
          background: "linear-gradient(135deg, hsla(280, 70%, 70%, 0.8), hsla(45, 90%, 75%, 0.6))",
          animationDelay: "1.5s",
        }} 
      />
      <div 
        className="absolute top-1/2 -right-6 w-3 h-3 rounded-full animate-float-organic"
        style={{
          background: "linear-gradient(135deg, hsla(170, 70%, 70%, 0.8), hsla(340, 82%, 76%, 0.6))",
          animationDelay: "3s",
        }} 
      />
    </div>
  );
};

export default OrganicProfileAvatar;
