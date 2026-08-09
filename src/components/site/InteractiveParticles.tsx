export function InteractiveParticles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden opacity-70"
      aria-hidden="true"
    >
      {/* Soft Ambient Light Background Auras */}
      <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-violet/8 blur-[140px]" />
      <div className="absolute top-1/3 -right-20 h-[32rem] w-[32rem] rounded-full bg-crimson/6 blur-[150px]" />
      <div className="absolute bottom-10 -left-20 h-[35rem] w-[35rem] rounded-full bg-gold/8 blur-[150px]" />
    </div>
  );
}

