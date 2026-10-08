import { Save, X } from "lucide-react";
import useMachineCoding from "../../hook/MachineCodingHook";
import { setFormOpen, setUpdateMachineCoding } from "../../state/MachineCodingSlice";

const field = "w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-400";
const label = "mb-1 block text-xs text-stone-400";

export default function UpdateMachineCoding() {

    let { isUpdateFormOpen, dispatch, register, errors, handleSubmit, updateMachineCodingHandle } = useMachineCoding()

    if (!isUpdateFormOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-md">
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#1f1814] p-5 shadow-2xl md:p-6">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Update Machine Coding Task</h2>
                    <button onClick={() => { dispatch(setFormOpen(false)); dispatch(setUpdateMachineCoding(null)) }} title="Close" className="rounded-xl p-2 text-stone-400 hover:bg-white/10">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit(updateMachineCodingHandle)} className="grid gap-3 sm:grid-cols-3">
                    <div className="sm:col-span-3">
                        <label className={label}>Task title</label>
                        <input {...register("title", {
                            required: "Title is required",
                            minLength: { value: 3, message: "Minimum 3 letters required" }
                        })} className={field} placeholder="Task title" />
                        {errors.title && <p className="text-[12px] text-red-500">{errors.title.message}</p>}
                    </div>

                    <div>
                        <label className={label}>Difficulty</label>
                        <select {...register("difficulty", { required: "Difficulty is required" })} className={field}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                        {errors.difficulty && <p className="text-[12px] text-red-500">{errors.difficulty.message}</p>}
                    </div>

                    <div>
                        <label className={label}>Status</label>
                        <select {...register("status", { required: "Status is required" })} className={field}>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                        {errors.status && <p className="text-[12px] text-red-500">{errors.status.message}</p>}
                    </div>

                    <div>
                        <label className={label}>Time spent (hrs)</label>
                        <input 
                        type="number"
                        step="0.1"
                            {...register("timeSpent", {
                                required: "Time spent is required",
                                min: {
                                    value: 0,
                                    message: "Value must be 0 or greater"
                                }
                            })} className={field} placeholder="0" />
                        {errors.timeSpent && <p className="text-[12px] text-red-500">{errors.timeSpent.message}</p>}
                    </div>

                    <div className="mt-2 flex flex-col-reverse gap-3 sm:col-span-3 sm:flex-row sm:justify-end">
                        <button type="button" onClick={() => { dispatch(setFormOpen(false)); dispatch(setUpdateMachineCoding(null)) }} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium">
                            Cancel
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black">
                            <Save size={18} />
                            Update Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}