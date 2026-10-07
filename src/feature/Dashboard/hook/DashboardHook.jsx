import React from 'react'
import useQuestions from '../../Questions/hook/QuestionHook';

const useDashboard = () => {
    let { questions } = useQuestions();

    // total questions
    const total = questions.length;

    // category wise completed counts
    const dsaCompleted = questions.filter(
        (q) => q.category === "DSA" && q.status === "Completed"
    ).length;

    const technicalCompleted = questions.filter(
        (q) => q.category === "Technical" && q.status === "Completed"
    ).length;

    const gitCompleted = questions.filter(
        (q) => q.category === "Git" && q.status === "Completed"
    ).length;

    // percent calculation helper
    const percent = (count) =>
        total === 0 ? 0 : Math.round((count / total) * 100);


    const categoryStyle = {
        DSA: "text-blue-300",
        Git: "text-orange-300",
        Technical: "text-purple-300",
    };

    const difficultyStyle = {
        Easy: "text-green-300",
        Medium: "text-yellow-300",
        Hard: "text-red-300",
    };

    const statusStyle = {
        Pending: "bg-white/10 text-stone-300",
        "In Progress": "bg-yellow-400/20 text-yellow-300",
        Completed: "bg-green-400/20 text-green-300",
    };
    return {
        gitCompleted, percent, total, technicalCompleted, dsaCompleted,
        categoryStyle,difficultyStyle, statusStyle
    }
}

export default useDashboard