import useProgress from "../../hook/ProgressHook";


export default function CategoryProgress() {
  const { categories, percent } = useProgress()

  return (
    <div className="h-full rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">By Category</h2>

      <div className="flex flex-col gap-5">
        {categories.map(({ name, done, total }) => (
          <div key={name}>
            <div className="mb-1 flex justify-between text-sm">
              <span>{name}</span>
              <span className="text-stone-400">
                {done}/{total} ({percent(done, total)}%)
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
                style={{ width: `${percent(done, total)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}