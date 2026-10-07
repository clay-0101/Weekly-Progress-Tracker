import { ListChecks, Braces, Cpu, GitBranch } from "lucide-react";
import useQuestions from "../../../Questions/hook/QuestionHook";
import useDashboard from "../../hook/DashboardHook";


export default function StatsGrid() {
let {gitCompleted, percent, total, technicalCompleted, dsaCompleted} = useDashboard()

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {/* Total Questions */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
        <div className="flex items-center justify-between text-stone-400">
          <span className="text-sm">Total Questions</span>
          <ListChecks size={18} className="text-orange-400" />
        </div>
        <p className="my-2 text-3xl font-semibold md:text-4xl">{total}</p>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* DSA Completed */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
        <div className="flex items-center justify-between text-stone-400">
          <span className="text-sm">DSA Completed</span>
          <Braces size={18} className="text-orange-400" />
        </div>
        <p className="my-2 text-3xl font-semibold md:text-4xl">{dsaCompleted}</p>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
            style={{ width: `${percent(dsaCompleted)}%` }}
          />
        </div>
      </div>

      {/* Technical Completed */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
        <div className="flex items-center justify-between text-stone-400">
          <span className="text-sm">Technical Completed</span>
          <Cpu size={18} className="text-orange-400" />
        </div>
        <p className="my-2 text-3xl font-semibold md:text-4xl">{technicalCompleted}</p>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
            style={{ width: `${percent(technicalCompleted)}%` }}
          />
        </div>
      </div>

      {/* Git Completed */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
        <div className="flex items-center justify-between text-stone-400">
          <span className="text-sm">Git Completed</span>
          <GitBranch size={18} className="text-orange-400" />
        </div>
        <p className="my-2 text-3xl font-semibold md:text-4xl">{gitCompleted}</p>
        <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
            style={{ width: `${percent(gitCompleted)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
