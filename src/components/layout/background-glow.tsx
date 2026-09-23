export default function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-clip">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.055)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,black,transparent)]" />

      <div className="absolute left-[-120px] top-[80px] h-80 w-80 rounded-full bg-blue-600/30 blur-[130px]" />
      <div className="absolute right-[40px] top-[40px] h-80 w-80 rounded-full bg-cyan-400/20 blur-[130px]" />
      <div className="absolute left-[35%] top-[35%] h-80 w-80 rounded-full bg-blue-500/16 blur-[140px]" />
      <div className="absolute right-[8%] top-[62%] h-80 w-80 rounded-full bg-indigo-500/18 blur-[150px]" />
      <div className="absolute bottom-[4%] left-[10%] h-80 w-80 rounded-full bg-blue-700/18 blur-[150px]" />
    </div>
  );
}
