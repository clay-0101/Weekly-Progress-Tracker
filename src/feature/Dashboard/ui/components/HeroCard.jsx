import { Rocket } from "lucide-react";
import { NavLink } from "react-router";

const HeroCard = () =>{
  return (
    <div className="flex h-full min-h-[220px] flex-col justify-center gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/40 to-purple-500/20 p-6 md:p-8">
      <p className="text-sm text-stone-300">Weekly goal</p>
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
        Optimize Your
        <br />
        Interview Prep
      </h2>
      <NavLink to="/questions" className="flex w-fit items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black">
        <Rocket size={18} />
        Start Now
      </NavLink>
    </div>
  );
}

export default HeroCard