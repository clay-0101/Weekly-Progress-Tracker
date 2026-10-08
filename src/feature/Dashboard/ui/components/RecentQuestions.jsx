import useDashboard from "../../hook/DashboardHook";

export default function RecentQuestions() {
let {  categoryStyle,difficultyStyle, statusStyle, questions} =  useDashboard()
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-3 text-lg font-semibold">Recent questions</h2>

      <div className="flex flex-col gap-3">
        {questions.map((q) => (
          <div
            key={q.id}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-white/[0.06] px-4 py-3"
          >
            <p className="min-w-full flex-1 text-sm sm:min-w-[180px]">{q.title}</p>
            <span className={`rounded-full border border-white/10 px-3 py-1 text-xs ${categoryStyle[q.category]}`}>
              {q.category}
            </span>
            <span className={`rounded-full border border-white/10 px-3 py-1 text-xs ${difficultyStyle[q.difficulty]}`}>
              {q.difficulty}
            </span>
            <span className={`rounded-full px-3 py-1 text-xs ${statusStyle[q.status]}`}>
              {q.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}