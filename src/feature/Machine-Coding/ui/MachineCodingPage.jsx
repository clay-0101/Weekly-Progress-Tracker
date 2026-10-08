import MachineTaskForm from "./components/MachineTaskForm";
import MachineTaskList from "./components/MachineTaskList";
import MachineTaskStats from "./components/MachineTaskStats";
import UpdateMachineCoding from "./components/MachineTaskUpdateForm";

export default function MachineCodingPage() {
  return (
    <div className="flex flex-col gap-4">
      <UpdateMachineCoding/>
      <MachineTaskForm/>
      <MachineTaskStats/>
      <MachineTaskList/>
    </div>
  );
}