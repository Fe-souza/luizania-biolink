const FluidBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main organic blobs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-blob-1"
        style={{
          background: "radial-gradient(circle, hsla(340, 82%, 76%, 0.4) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-blob-2"
        style={{
          background: "radial-gradient(circle, hsla(280, 70%, 70%, 0.35) 0%, transparent 70%)",
          bottom: "-15%",
          left: "-15%",
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-blob-3"
        style={{
          background: "radial-gradient(circle, hsla(45, 90%, 75%, 0.3) 0%, transparent 70%)",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div 
        className="absolute w-[300px] h-[300px] rounded-full blur-2xl animate-blob-4"
        style={{
          background: "radial-gradient(circle, hsla(170, 70%, 70%, 0.25) 0%, transparent 70%)",
          top: "20%",
          left: "10%",
        }}
      />
    </div>
  );
};

export default FluidBlobs;
