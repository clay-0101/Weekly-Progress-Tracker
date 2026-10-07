import { Pencil, Trash2 } from "lucide-react";

const tasks = [
  { id: 1, title: "Todo App", hours: "2 hrs spent", difficulty: "Medium", status: "In Progress" },
  { id: 2, title: "Tic Tac Toe", hours: "1.5 hrs spent", difficulty: "Easy", status: "Completed" },
  { id: 3, title: "Parking Lot System", hours: "0 hrs spent", difficulty: "Hard", status: "Pending" },
];

const difficultyStyle = {
  Easy: "text-green-300",
  Medium: "text-yellow-300",
  Hard: "text-red-300",
};

const statusStyle = {
  Pending: "bg-white/10 text-stone-300",
  "In Progress": "bg-yellow-400/20 text-yellow-300",
  Completed: "bg-green-400/20 text-green-300",
};

export default function MachineTaskList() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">Your machine coding tasks</h2>

      <div className="flex flex-col gap-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-white/[0.06] px-4 py-3"
          >
            <div className="min-w-full flex-1 sm:min-w-[180px]">
              <p className="text-sm">{t.title}</p>
              <p className="mt-0.5 text-xs text-stone-400">{t.hours}</p>
            </div>

            <span className={`rounded-full border border-white/10 px-3 py-1 text-xs ${difficultyStyle[t.difficulty]}`}>
              {t.difficulty}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs ${statusStyle[t.status]}`}>
              {t.status}
            </span>

            <div className="ml-auto flex gap-2">
              <button title="Edit" className="rounded-xl border border-white/10 bg-white/10 p-2 text-stone-300">
                <Pencil size={16} />
              </button>
              <button title="Delete" className="rounded-xl border border-white/10 bg-white/10 p-2 text-red-300">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}