import { Code2 } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const statusStyle = {
  Pending: "bg-white/10 text-stone-300",
  "In Progress": "bg-yellow-400/20 text-yellow-300",
  Completed: "bg-green-400/20 text-green-300",
};

export default function MachineCodingCard() {
  let machineCoding = useSelector((state) => state.machineCoding.allMachineCoding)

  return (
    <div className="flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="flex items-center gap-2 text-lg font-semibold">
        <Code2 size={20} className="text-orange-400" />
        Machine Coding
      </h2>

      {!machineCoding.length ? (<p className="py-6 text-center text-sm text-stone-400">No machine coding tasks yet.</p>) :
        (
          machineCoding.map((task) => (
            <div key={task.id} className="flex items-center justify-between gap-2 rounded-2xl bg-white/[0.06] px-4 py-3">
              <span className="text-sm">{task.title}</span>
              <span className={`rounded-full px-3 py-1 text-xs ${statusStyle[task.status]}`}>
                {task.status}
              </span>
            </div>
          ))
        )}

      <NavLink to="/machine-coding" className="mt-auto rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium">
        Manage tasks
      </NavLink>
    </div>
  )
}