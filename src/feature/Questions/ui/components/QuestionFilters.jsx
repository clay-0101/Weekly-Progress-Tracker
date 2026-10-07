import { Search } from "lucide-react";
import useQuestions from "../../hook/QuestionHook";
import { setCategory, setDifficulty, setSearch, setStatus } from "../../state/QuestionFilterSlice";



export default function QuestionFilters() {
 let {dispatch, field, label } = useQuestions()
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur">
      <h2 className="mb-4 text-lg font-semibold">Search &amp; Filters</h2>

      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <div className="sm:col-span-3 lg:col-span-1">
          <label className={label}>Search</label>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input 
            onChange={(e)=>{
              dispatch(setSearch(e.target.value))
            }}
            className={`${field} pl-9`} placeholder="Search questions..." />
          </div>
        </div>

        <div>
          <label className={label}>Category</label>
          <select 
          onChange={(e)=>{
          dispatch(setCategory(e.target.value))
          }}
          className={field}>
            <option>All</option>
            <option>DSA</option>
            <option>Git</option>
            <option>Technical</option>
          </select>
        </div>

        <div>
          <label className={label}>Status</label>
          <select
          onChange={(e)=>{
            dispatch(setStatus(e.target.value))
          }}
           className={field}>
            <option>All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div>
          <label className={label}>Difficulty</label>
          <select
          onChange={(e)=>{
            dispatch(setDifficulty(e.target.value))
          }}
           className={field}>
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
}