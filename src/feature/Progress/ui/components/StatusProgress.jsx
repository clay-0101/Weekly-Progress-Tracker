import { Clock, Loader, CheckCircle2 } from "lucide-react";
import useProgress from "../../hook/ProgressHook";

export default function StatusProgress() {
  // static data (baad mein hook se replace kar dena)
  const pending = 10;
  const inProgress = 8;
  const completed = 30;
 let {overallDone, overallInProgress , overallPending} = useProgress()

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">By Status</h2>

      <div className="grid gap-3 sm:grid-cols-3">
        {/* Pending */}
        <div className="rounded-2xl bg-white/[0.06] p-4">
          <div className="flex items-center justify-between text-sm text-stone-400">
            <span>Pending</span>
            <Clock size={18} className="text-stone-300" />
          </div>
          <p className="mt-2 text-3xl font-semibold text-stone-300">{overallPending}</p>
        </div>

        {/* In Progress */}
        <div className="rounded-2xl bg-white/[0.06] p-4">
          <div className="flex items-center justify-between text-sm text-stone-400">
            <span>In Progress</span>
            <Loader size={18} className="text-yellow-300" />
          </div>
          <p className="mt-2 text-3xl font-semibold text-yellow-300">{overallInProgress}</p>
        </div>

        {/* Completed */}
        <div className="rounded-2xl bg-white/[0.06] p-4">
          <div className="flex items-center justify-between text-sm text-stone-400">
            <span>Completed</span>
            <CheckCircle2 size={18} className="text-green-300" />
          </div>
          <p className="mt-2 text-3xl font-semibold text-green-300">{overallDone}</p>
        </div>
      </div>
    </div>
  );
}