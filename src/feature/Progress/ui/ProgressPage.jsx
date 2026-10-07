import CategoryProgress from "./components/CategoryProgress";
import OverallCompletion from "./components/OverallCompletion";
import StatusProgress from "./components/StatusProgress";
import WeeklyProgress from "./components/WeeklyProgress";


export default function ProgressPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-3">
        <OverallCompletion/>
        <div className="md:col-span-2">
          <CategoryProgress/>
        </div>
      </div>
      <StatusProgress/>
      <WeeklyProgress/>
    </div>
  );
}