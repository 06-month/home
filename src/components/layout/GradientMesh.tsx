export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light Mode Mesh */}
      <div className="absolute top-0 left-0 right-0 h-[550px] w-full bg-white opacity-100 transition-opacity duration-500 dark:opacity-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-[#f5e9d4] opacity-50 blur-[80px] animate-mesh-1" />
        <div className="absolute top-[-10%] left-[20%] w-[50%] h-[70%] rounded-full bg-[#fed7aa] opacity-65 blur-[90px] animate-mesh-2" />
        <div className="absolute top-[-15%] left-[50%] w-[55%] h-[75%] rounded-full bg-[#e0e7ff] opacity-75 blur-[80px] animate-mesh-3" />
        <div className="absolute top-[-5%] left-[70%] w-[45%] h-[65%] rounded-full bg-[#e3e8ee] opacity-80 blur-[80px] animate-mesh-1" />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] rounded-full bg-[#fce7f3] opacity-60 blur-[90px] animate-mesh-2" />
      </div>
      
      {/* Dark Mode Mesh */}
      <div className="absolute top-0 left-0 right-0 h-[550px] w-full bg-[#0b1528] opacity-0 transition-opacity duration-500 dark:opacity-100">
        <div className="absolute top-[-25%] left-[-15%] w-[70%] h-[90%] rounded-full bg-[#1c1e54]/50 opacity-70 blur-[100px] animate-mesh-1" />
        <div className="absolute top-[-15%] left-[15%] w-[60%] h-[80%] rounded-full bg-[#2e2b8c]/40 opacity-80 blur-[100px] animate-mesh-2" />
        <div className="absolute top-[-20%] left-[45%] w-[65%] h-[85%] rounded-full bg-[#4c1d95]/30 opacity-70 blur-[110px] animate-mesh-3" />
        <div className="absolute top-[-10%] right-[-15%] w-[60%] h-[90%] rounded-full bg-[#ea2261]/15 opacity-50 blur-[100px] animate-mesh-1" />
      </div>
      
      {/* Bottom fade out to white/dark canvas */}
      <div className="absolute top-[400px] left-0 right-0 h-[150px] bg-gradient-to-t from-white to-transparent dark:from-[#0b1528]" />
    </div>
  );
}
