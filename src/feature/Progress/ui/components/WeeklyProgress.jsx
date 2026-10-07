const weeks = [
  { label: "W1", done: 4 },
  { label: "W2", done: 7 },
  { label: "W3", done: 5 },
  { label: "W4", done: 9 },
  { label: "W5", done: 3 },
  { label: "W6", done: 2 },
];

export default function WeeklyProgress() {
  const max = Math.max(...weeks.map((w) => w.done));
  const total = weeks.reduce((sum, w) => sum + w.done, 0);
  const current = weeks.length - 1;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Week-wise Progress</h2>
        <p className="text-sm text-stone-400">{total} questions completed in 6 weeks</p>
      </div>

      <div className="flex h-48 items-end gap-2 sm:gap-4">
        {weeks.map((w, i) => (
          <div key={w.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-xs text-stone-300">{w.done}</span>
            <div
              className={`w-full max-w-14 rounded-t-xl ${
                i === current
                  ? "bg-gradient-to-t from-orange-500 to-yellow-400"
                  : "bg-white/20"
              }`}
              style={{ height: `${(w.done / max) * 100}%` }}
            />
            <span className={`text-xs ${i === current ? "text-orange-400" : "text-stone-400"}`}>
              {w.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}