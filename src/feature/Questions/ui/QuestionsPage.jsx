import QuestionFilters from "./components/QuestionFilters";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";
import UpdateQuestion from "./components/UpdateQuestion";


export default function QuestionsPage() {
  return (
    <div className="flex flex-col gap-4">
      <UpdateQuestion/>
      <QuestionForm/>
      <QuestionFilters/>
      <QuestionList/>
    </div>
  );
}