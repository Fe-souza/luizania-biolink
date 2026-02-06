const FluidBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main organic blobs - Gray dominant with subtle gold */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl animate-blob-1"
        style={{
          background: "radial-gradient(circle, hsla(0, 0%, 50%, 0.2) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl animate-blob-2"
        style={{
          background: "radial-gradient(circle, hsla(43, 40%, 45%, 0.2) 0%, transparent 70%)",
          bottom: "-15%",
          left: "-15%",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl animate-blob-3"
        style={{
          background: "radial-gradient(circle, hsla(0, 0%, 55%, 0.15) 0%, transparent 70%)",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full blur-2xl animate-blob-4"
        style={{
          background: "radial-gradient(circle, hsla(43, 35%, 50%, 0.15) 0%, transparent 70%)",
          top: "20%",
          left: "10%",
        }}
      />
    </div>
  );
};

export default FluidBlobs;
