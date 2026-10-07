import HeroCard from "./components/HeroCard";
import MachineCodingCard from "./components/MachineCodingCard";
import RecentQuestions from "./components/RecentQuestions";
import StatsGrid from "./components/StatsGrid";


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      {/* Row 1: Hero (2/3) + Machine Coding (1/3) on desktop, stacked on mobile */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <HeroCard/>
        </div>
        <MachineCodingCard/>
      </div>

      {/* Row 2: 4 stat cards */}
      <StatsGrid/>

      {/* Row 3: Recent questions */}
      <RecentQuestions/>
    </div>
  );
}