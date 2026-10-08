import { ListTodo, Clock, Loader, CheckCircle2 } from "lucide-react";
import useMachineCoding from "../../hook/MachineCodingHook";

const stats = [
  { label: "Total Tasks", key: "total", icon: ListTodo, color: "text-orange-400" },
  { label: "Pending", key: "pending", icon: Clock, color: "text-stone-300" },
  { label: "In Progress", key: "inProgress", icon: Loader, color: "text-yellow-300" },
  { label: "Completed", key: "completed", icon: CheckCircle2, color: "text-green-300" },
];

export default function MachineTaskStats() {

  let { getStats } = useMachineCoding()
  let values = getStats()

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map(({ label, key, icon: Icon, color }) => (
        <div
          key={label}
          className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
        >
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-sm">{label}</span>
            <Icon size={18} className={color} />
          </div>
          <p className={`mt-2 text-3xl font-semibold md:text-4xl ${color}`}>
            {values[key]}
          </p>
        </div>
      ))}
    </div>
  )
}