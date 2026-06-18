import { useState, useEffect } from 'react';

export function DashboardMockup() {
  const [epoch, setEpoch] = useState(1);
  const [psnr, setPsnr] = useState(14.2);
  const [ssim, setSsim] = useState(0.42);
  const [gaussians, setGaussians] = useState(124500);

  useEffect(() => {
    const timer = setInterval(() => {
      setEpoch((prev) => {
        const next = prev >= 100 ? 1 : prev + 1;
        // Adjust metrics for 3D Gaussian Splatting densification
        if (next === 1) {
          setPsnr(14.2);
          setSsim(0.42);
          setGaussians(124500);
        } else {
          setPsnr((p) => Math.min(31.4, Number((p + 0.18).toFixed(2))));
          setSsim((s) => Math.min(0.965, Number((s + 0.006).toFixed(3))));
          setGaussians((g) => Math.min(684200, g + Math.floor(Math.random() * 8000 + 2000)));
        }
        return next;
      });
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[580px] mx-auto lg:mx-0 select-none font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#533afd]/10 to-[#ea2261]/10 rounded-2xl blur-2xl -z-10 animate-pulse" />

      {/* Main Console Panel (Dark Navy IDE) */}
      <div className="rounded-2xl border border-neutral-800 bg-[#0d253d] text-white shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#071829]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-[11px] text-white/50">train_dynamic_gaussian_splatting.py</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 rounded-md px-2 py-0.5 font-mono text-[9px] text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Active: 4D Scene Study
          </div>
        </div>

        {/* Console Body */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[11px]">
          {/* Left Side: Code Preview */}
          <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-4">
            <div className="text-white/40 text-[9px] uppercase tracking-wider mb-2 font-bold font-sans">Dynamic Splatting Pipeline</div>
            <pre className="leading-relaxed text-white/80 overflow-x-auto whitespace-pre font-mono text-[10px]">
              <code>
{`1: # Diff Rasterizer Config
2: raster_settings = Settings(
3:     image_height=H, image_width=W,
4:     tanfovx=fov_x, tanfovy=fov_y,
5:     bg=background,
6:     viewmatrix=v_mat,
7:     projmatrix=p_mat,
8:     sh_degree=sh_deg,
9:     campos=cam_center
10: )
11: 
12: # Splat & Render Dynamic Scene
13: img, radii = rasterizer(
14:     means3D=xyz,
15:     opacities=alpha,
16:     scales=s,
17:     rotations=q
18: )`}
              </code>
            </pre>
          </div>

          {/* Right Side: 3D Visualization & Metrics */}
          <div className="flex flex-col justify-between gap-4">
            {/* 3D Gaussian Scene Viewport (SVG Mockup) */}
            <div className="relative h-32 bg-[#071829] rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute top-2 left-2 text-[9px] text-white/40 font-bold font-sans">3D GAUSSIAN FIELD</div>
              
              {/* Grid Background */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
                    <path d="M 16 0 L 0 0 0 16" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Camera Projection Frustum & Gaussians */}
              <svg className="w-28 h-28 text-white" viewBox="0 0 100 100" fill="none">
                {/* Camera Frustum Lines */}
                <path d="M 10 90 L 40 45 M 10 90 L 70 45" stroke="#665efd" strokeWidth="1" strokeDasharray="2,2" />
                <path d="M 40 45 L 70 45 L 60 25 L 30 25 Z" stroke="#665efd" strokeWidth="1.2" strokeOpacity="0.5" />
                <circle cx="10" cy="90" r="3" fill="#533afd" /> {/* Camera Origin */}
                <text x="12" y="94" fill="#665efd" fontSize="6" fontFamily="sans-serif">Camera</text>
                
                {/* Shaded Gaussians (Colored Ellipses with blur) */}
                {/* Cream Gaussian */}
                <ellipse cx="48" cy="38" rx="12" ry="5" transform="rotate(-15 48 38)" fill="#f5e9d4" fillOpacity="0.4" stroke="#f5e9d4" strokeWidth="0.5" />
                {/* Orange Gaussian */}
                <ellipse cx="62" cy="32" rx="10" ry="7" transform="rotate(30 62 32)" fill="#fed7aa" fillOpacity="0.5" stroke="#fed7aa" strokeWidth="0.5" />
                {/* Indigo Gaussian */}
                <ellipse cx="38" cy="28" rx="8" ry="4" transform="rotate(45 38 28)" fill="#665efd" fillOpacity="0.45" stroke="#665efd" strokeWidth="0.5" />
                {/* Ruby Gaussian */}
                <ellipse cx="52" cy="26" rx="9" ry="3" transform="rotate(-60 52 26)" fill="#ea2261" fillOpacity="0.35" stroke="#ea2261" strokeWidth="0.5" />
                {/* Magenta Gaussian */}
                <ellipse cx="58" cy="40" rx="6" ry="6" fill="#f96bee" fillOpacity="0.4" stroke="#f96bee" strokeWidth="0.5" />
                
                {/* Point Cloud centroids */}
                <circle cx="48" cy="38" r="0.8" fill="white" />
                <circle cx="62" cy="32" r="0.8" fill="white" />
                <circle cx="38" cy="28" r="0.8" fill="white" />
                <circle cx="52" cy="26" r="0.8" fill="white" />
              </svg>

              {/* Angle lines indicator */}
              <div className="absolute bottom-2 right-2 text-[8px] text-[#fed7aa] font-mono flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-yellow-400 animate-ping" />
                Densifying...
              </div>
            </div>

            {/* Live Metrics */}
            <div className="bg-[#071829] rounded-lg p-2.5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-[9px] text-white/40 font-bold font-sans">
                <span>TRAINING ITERATION</span>
                <span className="font-mono text-white/50 font-normal">Step {epoch * 300}/30,000</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-[#f96bee] to-ruby transition-all duration-300 ease-out"
                  style={{ width: `${epoch}%` }}
                />
              </div>
              
              {/* Metrics Readout */}
              <div className="grid grid-cols-3 gap-1.5 text-left pt-0.5">
                <div>
                  <div className="text-[7.5px] text-white/40">PSNR</div>
                  <div className="text-[11px] font-semibold font-tabular text-[#f96bee]">{psnr.toFixed(1)} dB</div>
                </div>
                <div>
                  <div className="text-[7.5px] text-white/40">SSIM</div>
                  <div className="text-[11px] font-semibold font-tabular text-[#665efd]">{ssim}</div>
                </div>
                <div>
                  <div className="text-[7.5px] text-white/40">GAUSSIANS</div>
                  <div className="text-[10px] font-semibold font-tabular text-[#fed7aa]">{gaussians.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
