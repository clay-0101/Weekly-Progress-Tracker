import React from 'react'
import useQuestions from '../../Questions/hook/QuestionHook'
import useMachineCoding from '../../Machine-Coding/hook/MachineCodingHook'

const useProgress = () => {
    let { questions } = useQuestions()
    let { machineCoding } = useMachineCoding()

    let machineCodingCompletedTask = machineCoding.filter((t)=> t.status === "Completed").length
    
    const getCount = (category) => {
        let list = questions.filter((q) => q.category === category)
        let done = list.filter((q) => q.status === "Completed").length

        return { done, total: list.length }
    }

    let percent = (done, total) => {
       return total === 0 ? 0 : Math.round((done / total) * 100)
    }

    const categories = [
        { name: "DSA", ...getCount("DSA") },
        { name: "Git", ...getCount("Git") },
        { name: "Technical", ...getCount("Technical") },
        { name: "Machine Coding", done: machineCodingCompletedTask, total: machineCoding.length },
    ];

    let overallDone = categories.reduce((sum , c) => sum + c.done , 0)
    let overallTotal = categories.reduce((sum , c) => sum + c.total , 0)
    let overallPercentage = percent(overallDone, overallTotal)

    return {
        categories , percent, overallDone , overallTotal, overallPercentage
    }
}

export default useProgress