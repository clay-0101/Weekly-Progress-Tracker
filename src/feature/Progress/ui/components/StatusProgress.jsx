import { Clock, Loader, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Pending", value: 10, icon: Clock, color: "text-stone-300" },
  { label: "In Progress", value: 8, icon: Loader, color: "text-yellow-300" },
  { label: "Completed", value: 30, icon: CheckCircle2, color: "text-green-300" },
];

export default function StatusProgress() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">By Status</h2>

      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl bg-white/[0.06] p-4">
            <div className="flex items-center justify-between text-sm text-stone-400">
              <span>{label}</span>
              <Icon size={18} className={color} />
            </div>
            <p className={`mt-2 text-3xl font-semibold ${color}`}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}