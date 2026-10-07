import { LayoutDashboard, ListChecks, Code2, PieChart, Target } from "lucide-react";
import { Outlet, NavLink } from "react-router";

const App = () => {
  return (
    <div className="min-h-screen bg-[#17120f] bg-[radial-gradient(circle_at_70%_0%,#6b3a1f,transparent_45%),radial-gradient(circle_at_0%_100%,#3a2a4a,transparent_40%)] text-stone-100">
      <div className="flex flex-col gap-4 p-3 pb-24 md:flex-row md:p-4">
        
        {/* Sidebar */}
        <nav className="fixed inset-x-0 bottom-0 z-10 flex items-center justify-around rounded-t-3xl bg-[#0f0c0a] p-2 md:sticky md:top-4 md:h-[calc(100vh-2rem)] md:w-[76px] md:flex-col md:justify-start md:gap-2 md:rounded-3xl md:p-3">
          
          <Target className="mb-3 hidden text-orange-400 md:block" size={28} />

          {/* Dashboard */}
          <NavLink
            to="/"
            title="Dashboard"
            className={({ isActive }) =>
              `flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/10 hover:text-orange-400 ${
                isActive ? "bg-white/10 text-orange-400" : "text-stone-400"
              }`
            }
          >
            <LayoutDashboard size={22} />
          </NavLink>

          {/* Questions */}
          <NavLink
            to="/questions"
            title="Questions"
            className={({ isActive }) =>
              `flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/10 hover:text-orange-400 ${
                isActive ? "bg-white/10 text-orange-400" : "text-stone-400"
              }`
            }
          >
            <ListChecks size={22} />
          </NavLink>

          {/* Machine Coding */}
          <NavLink
            to="/machine-coding"
            title="Machine Coding"
            className={({ isActive }) =>
              `flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/10 hover:text-orange-400 ${
                isActive ? "bg-white/10 text-orange-400" : "text-stone-400"
              }`
            }
          >
            <Code2 size={22} />
          </NavLink>

          {/* Progress */}
          <NavLink
            to="/progress"
            title="Progress"
            className={({ isActive }) =>
              `flex h-12 w-12 items-center justify-center rounded-2xl transition hover:bg-white/10 hover:text-orange-400 ${
                isActive ? "bg-white/10 text-orange-400" : "text-stone-400"
              }`
            }
          >
            <PieChart size={22} />
          </NavLink>

        </nav>

        {/* Main content area */}
        <main className="min-w-0 flex-1">
          <h1 className="mb-4 mt-1 text-2xl font-semibold md:text-3xl">
            Interview Practice Tracker
          </h1>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
