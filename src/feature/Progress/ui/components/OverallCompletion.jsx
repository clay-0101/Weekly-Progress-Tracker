export default function OverallCompletion() {
  const percent = 62;

  return (
    <div className="flex h-full flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="self-start text-lg font-semibold">Overall Completion</h2>

      <div
        className="grid h-40 w-40 place-items-center rounded-full"
        style={{
          background: `conic-gradient(#f97316 0 ${percent}%, rgba(255,255,255,0.1) 0)`,
        }}
      >
        <div className="grid h-[7.5rem] w-[7.5rem] place-items-center rounded-full bg-[#2a201a] text-3xl font-bold">
          {percent}%
        </div>
      </div>

      <p className="text-sm text-stone-400">30 of 48 questions completed</p>
    </div>
  );
}