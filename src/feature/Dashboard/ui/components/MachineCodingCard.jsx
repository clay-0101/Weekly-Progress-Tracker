import { Code2 } from "lucide-react";

const tasks = [
  { id: 1, title: "Todo App", status: "In Progress" },
  { id: 2, title: "Tic Tac Toe", status: "Completed" },
  { id: 3, title: "Parking Lot System", status: "Pending" },
];

const statusStyle = {
  Pending: "bg-white/10 text-stone-300",
  "In Progress": "bg-yellow-400/20 text-yellow-300",
  Completed: "bg-green-400/20 text-green-300",
};

export default function MachineCodingCard() {
  return (
    <div className="flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="flex items-center gap-2 text-lg font-semibold">
        <Code2 size={20} className="text-orange-400" />
        Machine Coding
      </h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between gap-2 rounded-2xl bg-white/[0.06] px-4 py-3"
        >
          <span className="text-sm">{task.title}</span>
          <span className={`rounded-full px-3 py-1 text-xs ${statusStyle[task.status]}`}>
            {task.status}
          </span>
        </div>
      ))}

      <button className="mt-auto rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium">
        Manage tasks
      </button>
    </div>
  );
}