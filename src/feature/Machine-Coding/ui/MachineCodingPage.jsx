import MachineTaskForm from "./components/MachineTaskForm";
import MachineTaskList from "./components/MachineTaskList";
import MachineTaskStats from "./components/MachineTaskStats";

export default function MachineCodingPage() {
  return (
    <div className="flex flex-col gap-4">
      <MachineTaskForm/>
      <MachineTaskStats/>
      <MachineTaskList/>
    </div>
  );
}