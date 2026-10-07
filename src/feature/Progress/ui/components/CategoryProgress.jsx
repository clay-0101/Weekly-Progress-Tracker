const categories = [
  { name: "DSA", done: 18, total: 25 },
  { name: "Git", done: 5, total: 8 },
  { name: "Technical", done: 7, total: 15 },
];

export default function CategoryProgress() {
  return (
    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">By Category</h2>

      <div className="flex flex-col gap-5">
        {categories.map(({ name, done, total }) => {
          const percent = Math.round((done / total) * 100);
          return (
            <div key={name}>
              <div className="mb-1 flex justify-between text-sm">
                <span>{name}</span>
                <span className="text-stone-400">
                  {done}/{total} ({percent}%)
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}