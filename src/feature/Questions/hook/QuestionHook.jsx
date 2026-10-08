import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setFormOpen, setQuestion, setUpdateQuestion } from '../state/QuestionSlice'


const useQuestions = () => {
    let dispatch = useDispatch()
    let questions = useSelector((state) => state.questions.allQuestions)
    let { status, category, difficulty, search } = useSelector((state) => state.filterQuestion)
    let { isUpdateFormOpen, updateQuestion } = useSelector((state) => state.questions)


    const field =
        "w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-400";
    const label = "mb-1 block text-xs text-stone-400";

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

    let { reset, register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange", values: updateQuestion || {} })

    function addQuestion(data) {
        let updatedQuestionList = [...questions, { ...data, id: Date.now(), date: new Date().toLocaleDateString("en-GB") }]
        dispatch(setQuestion(updatedQuestionList))
        reset({
            title: "",
            category: "",
            difficulty: "",
            status: "",
        })
    }

    function updateQuestionHandle(data) {
        let updatedQuetionList = questions.map((q) => {
            return q.id === updateQuestion.id ? { ...q, ...data } : q
        })
        dispatch(setQuestion(updatedQuetionList))
        dispatch(setFormOpen(false));
        dispatch(setUpdateQuestion(null));
        reset()
    }

    function deleteQuestion(id) {
        let updatedQuestionList = questions.filter((q) => q.id !== id)
        dispatch(setQuestion(updatedQuestionList))
        reset()
    }
    let filterData = useMemo(() => {
        let data = questions

        if (status !== "All") {
            data = data.filter((question) => question.status === status)
        }

        if (category !== "All") {
            data = data.filter((question) => question.category === category)
        }

        if (difficulty !== "All") {
            data = data.filter((question) => question.difficulty === difficulty)
        }

        if (search && search.trim() !== "") {
            data = data.filter((question) => question.title.toLowerCase().startsWith(search.toLowerCase()))
        }

        return data
    }, [questions, status, category, difficulty, search])

    


    return {
        register, handleSubmit, errors, addQuestion, dispatch,
        statusStyle, difficultyStyle, categoryStyle, questions, filterData,
        field, label, isUpdateFormOpen, updateQuestion, updateQuestionHandle,
        deleteQuestion

    }
}

export default useQuestions