import { Pencil, Trash2 } from "lucide-react";
import useQuestions from "../../hook/QuestionHook";
import { setFormOpen, setUpdateQuestion } from "../../state/QuestionSlice";




export default function QuestionList() {
  let { statusStyle, difficultyStyle, categoryStyle , filterData, dispatch, deleteQuestion} = useQuestions();
  

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">Your questions</h2>

      {filterData.length === 0 ? (
        <div className="flex items-center justify-center rounded-2xl bg-white/[0.06] px-4 py-6">
          <p className="text-sm font-medium text-stone-300">
            No questions added yet ✦ Start by adding your first one!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filterData.map((q) => (
            <div
              key={q.id}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-white/[0.06] px-4 py-3"
            >
              <div className="min-w-full flex-1 sm:min-w-[180px]">
                <p className="text-sm">{q.title}</p>
                <p className="mt-0.5 text-xs text-stone-400">{q.date}</p>
              </div>

              <span className={`rounded-full border border-white/10 px-3 py-1 text-xs ${categoryStyle[q.category]}`}>
                {q.category}
              </span>
              <span className={`rounded-full border border-white/10 px-3 py-1 text-xs ${difficultyStyle[q.difficulty]}`}>
                {q.difficulty}
              </span>
              <span className={`rounded-full px-3 py-1 text-xs ${statusStyle[q.status]}`}>
                {q.status}
              </span>

              <div className="ml-auto flex gap-2">
                <button
                onClick={()=>{
                  dispatch(setUpdateQuestion(q))
                  dispatch(setFormOpen(true))
                }}
                 title="Edit" className="cursor-pointer active:scale-98 rounded-xl border border-white/10 bg-white/10 p-2 text-stone-300">
                  <Pencil size={16} />
                </button>
                <button
                onClick={()=>{
                  deleteQuestion(q.id)
                }}
                 title="Delete" className="cursor-pointer active:scale-98 rounded-xl border border-white/10 bg-white/10 p-2 text-red-300">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
