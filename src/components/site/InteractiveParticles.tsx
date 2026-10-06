export function InteractiveParticles() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden opacity-50"
      aria-hidden="true"
    >
      {/* Soft Ambient Spiritual Glows */}
      <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#D9A52E]/10 blur-[150px]" />
      <div className="absolute top-1/3 -right-20 h-[34rem] w-[34rem] rounded-full bg-[#F0E8F7]/60 blur-[160px]" />
      <div className="absolute bottom-10 -left-20 h-[36rem] w-[36rem] rounded-full bg-[#F8EEF2]/60 blur-[160px]" />
    </div>
  );
}
