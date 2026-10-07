import { Plus } from "lucide-react";

const field =
  "w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-400";
const label = "mb-1 block text-xs text-stone-400";

export default function MachineTaskForm() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">Add Machine Coding Task</h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-4">
          <label className={label}>Task title</label>
          <input className={field} placeholder="e.g. Build a Todo App" />
        </div>

        <div>
          <label className={label}>Difficulty</label>
          <select className={field}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div>
          <label className={label}>Status</label>
          <select className={field}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div>
          <label className={label}>Time spent (hrs)</label>
          <input type="number" className={field} placeholder="0" />
        </div>

        <div className="flex items-end">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-black">
            <Plus size={18} />
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}