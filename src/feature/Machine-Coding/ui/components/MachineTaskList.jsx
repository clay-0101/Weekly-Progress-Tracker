import { Pencil, Trash2 } from "lucide-react";
import useMachineCoding from "../../hook/MachineCodingHook";
import { setFormOpen, setUpdateMachineCoding } from "../../state/MachineCodingSlice";

export default function MachineTaskList() {

  let { filterData, difficultyStyle, statusStyle, dispatch, deleteMachineCoding } = useMachineCoding()

  function editTask(task) {
    dispatch(setUpdateMachineCoding(task))
    dispatch(setFormOpen(true))
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">Your machine coding tasks</h2>

      {!filterData.length ? (
        <div className="rounded-2xl bg-white/[0.06] px-4 py-10 text-center text-sm text-stone-400">
          No machine coding tasks found.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filterData.map((task) => (
            <div
              key={task.id}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl bg-white/[0.06] px-4 py-3"
            >
              <div className="min-w-full flex-1 sm:min-w-[180px]">
                <p className="text-sm">{task.title}</p>
                <p className="mt-0.5 text-xs text-stone-400">{task.timeSpent} hrs spent</p>
              </div>

              <span className={`rounded-full border border-white/10 px-3 py-1 text-xs ${difficultyStyle[task.difficulty]}`}>
                {task.difficulty}
              </span>

              <span className={`rounded-full px-3 py-1 text-xs ${statusStyle[task.status]}`}>
                {task.status}
              </span>

              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => editTask(task)}
                  title="Edit"
                  className="rounded-xl border border-white/10 bg-white/10 p-2 text-stone-300">
                  <Pencil size={16} />
                </button>

                <button
                  onClick={() => deleteMachineCoding(task.id)}
                  title="Delete"
                  className="rounded-xl border border-white/10 bg-white/10 p-2 text-red-300"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}