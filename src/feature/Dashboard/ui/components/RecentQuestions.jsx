import { useNavigate } from "react-router";
import useDashboard from "../../hook/DashboardHook";

export default function RecentQuestions() {
  const { categoryStyle, difficultyStyle, statusStyle, questions } = useDashboard();
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-3 text-lg font-semibold">Recent questions</h2>

      {questions.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-10 text-center">
          <p className="text-sm text-stone-400">
           No questions added yet ✦ Begin by creating your first one!
          </p>
          <button
            onClick={() => navigate("/questions")}
            className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            Go to Questions
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {questions.slice(0, 10).map((q) => (
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
      )}
    </div>
  );
}