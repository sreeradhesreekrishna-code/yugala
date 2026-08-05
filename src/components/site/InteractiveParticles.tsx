export function InteractiveParticles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden opacity-40"
      aria-hidden="true"
    >
      {/* Soft Ambient Background Aura */}
      <div className="absolute -top-32 left-1/2 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />
      <div className="absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-[150px]" />
      <div className="absolute bottom-10 -left-20 h-[30rem] w-[30rem] rounded-full bg-crimson/15 blur-[150px]" />
    </div>
  );
}
