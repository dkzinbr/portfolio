export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-80px] top-[120px] h-72 w-72 rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute right-[80px] top-[60px] h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute bottom-[260px] left-[45%] h-72 w-72 rounded-full bg-blue-500/20 blur-[130px]" />
      <div className="absolute bottom-[80px] right-[10%] h-72 w-72 rounded-full bg-indigo-500/20 blur-[140px]" />
    </div>
  );
}