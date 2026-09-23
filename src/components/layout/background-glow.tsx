export default function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-clip">
      <div className="absolute inset-x-0 top-0 h-[760px] [background-image:linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute right-[-12rem] top-[-10rem] h-[36rem] w-[36rem] rounded-full bg-sky-500/12 blur-[150px]" />
      <div className="absolute left-[-16rem] top-[36rem] h-[30rem] w-[30rem] rounded-full bg-blue-600/8 blur-[160px]" />
    </div>
  );
}
