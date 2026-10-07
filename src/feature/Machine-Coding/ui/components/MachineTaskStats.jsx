import { ListTodo, Clock, Loader, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Total Tasks", value: 3, icon: ListTodo, color: "text-orange-400" },
  { label: "Pending", value: 1, icon: Clock, color: "text-stone-300" },
  { label: "In Progress", value: 1, icon: Loader, color: "text-yellow-300" },
  { label: "Completed", value: 1, icon: CheckCircle2, color: "text-green-300" },
];

export default function MachineTaskStats() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <div
          key={label}
          className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
        >
          <div className="flex items-center justify-between text-stone-400">
            <span className="text-sm">{label}</span>
            <Icon size={18} className={color} />
          </div>
          <p className={`mt-2 text-3xl font-semibold md:text-4xl ${color}`}>{value}</p>
        </div>
      ))}
    </div>
  );
}