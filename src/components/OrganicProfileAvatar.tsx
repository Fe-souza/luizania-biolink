import profileImage from "@/assets/profile-avatar.jpg";

const OrganicProfileAvatar = () => {
  return (
    <div className="relative animate-scale-in">
      {/* Floating organic rings */}
      <div 
        className="absolute -inset-6 rounded-full animate-spin-slow"
        style={{
          background: "conic-gradient(from 0deg, transparent, hsla(45, 90%, 60%, 0.4), transparent, hsla(35, 85%, 55%, 0.3), transparent)",
        }}
      />
      <div 
        className="absolute -inset-4 rounded-full animate-spin-reverse"
        style={{
          background: "conic-gradient(from 180deg, transparent, hsla(50, 95%, 70%, 0.25), transparent, hsla(30, 80%, 50%, 0.2), transparent)",
        }}
      />
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-2xl animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, hsla(45, 90%, 60%, 0.5) 0%, transparent 70%)",
        }}
      />
      
      {/* Main avatar container */}
      <div 
        className="relative p-1 rounded-full"
        style={{
          background: "linear-gradient(135deg, hsla(45, 90%, 60%, 0.9), hsla(35, 85%, 55%, 0.9), hsla(50, 95%, 70%, 0.9))",
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
          background: "linear-gradient(135deg, hsla(45, 90%, 60%, 0.9), hsla(35, 85%, 55%, 0.7))",
          animationDelay: "0s",
        }} 
      />
      <div 
        className="absolute -bottom-2 -left-4 w-4 h-4 rounded-full animate-float-organic"
        style={{
          background: "linear-gradient(135deg, hsla(50, 95%, 70%, 0.9), hsla(45, 90%, 60%, 0.7))",
          animationDelay: "1.5s",
        }} 
      />
      <div 
        className="absolute top-1/2 -right-6 w-3 h-3 rounded-full animate-float-organic"
        style={{
          background: "linear-gradient(135deg, hsla(30, 80%, 50%, 0.9), hsla(45, 90%, 60%, 0.7))",
          animationDelay: "3s",
        }} 
      />
    </div>
  );
};

export default OrganicProfileAvatar;
