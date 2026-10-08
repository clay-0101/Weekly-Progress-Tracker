import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setFormOpen, setMachineCoding, setUpdateMachineCoding } from '../state/MachineCodingSlice'

const useMachineCoding = () => {
    let dispatch = useDispatch()
    let machineCoding = useSelector((state) => state.machineCoding.allMachineCoding)
    let { status, difficulty, search } = useSelector((state) => state.machineCodingFilter)
    let { isUpdateFormOpen, updateMachineCoding } = useSelector((state) => state.machineCoding)

    const field = "w-full rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-stone-100 placeholder:text-stone-500 outline-none focus:border-orange-400"
    const label = "mb-1 block text-xs text-stone-400"

    const difficultyStyle = {
        Easy: "text-green-300",
        Medium: "text-yellow-300",
        Hard: "text-red-300",
    }

    const statusStyle = {
        Pending: "bg-white/10 text-stone-300",
        "In Progress": "bg-yellow-400/20 text-yellow-300",
        Completed: "bg-green-400/20 text-green-300",
    }

    let { reset, register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange", values: updateMachineCoding || {} })

    function addMachineCoding(data) {
        let updatedMachineCodingList = [{ ...data, id: Date.now(), date: new Date().toLocaleDateString("en-GB") }, ...machineCoding]
        dispatch(setMachineCoding(updatedMachineCodingList))
        reset({ title: "", difficulty: "", status: "", timeSpent: "" })
    }

    function updateMachineCodingHandle(data) {
        let updatedMachineCodingList = machineCoding.map((m) => {
            return m.id === updateMachineCoding.id ? { ...m, ...data } : m
        })
        dispatch(setMachineCoding(updatedMachineCodingList))
        dispatch(setFormOpen(false))
        dispatch(setUpdateMachineCoding(null))
        reset()
    }

    function deleteMachineCoding(id) {
        let updatedMachineCodingList = machineCoding.filter((m) => m.id !== id)
        dispatch(setMachineCoding(updatedMachineCodingList))
        reset()
    }

    let filterData = useMemo(() => {
        let data = machineCoding

        if (status !== "All") data = data.filter((machine) => machine.status === status)
        if (difficulty !== "All") data = data.filter((machine) => machine.difficulty === difficulty)
        if (search && search.trim() !== "") data = data.filter((machine) => machine.title.toLowerCase().startsWith(search.toLowerCase()))

        return data
    }, [machineCoding, status, difficulty, search])

    function getStats() {
        return {
            total: machineCoding.length,
            pending: machineCoding.filter((m) => m.status === "Pending").length,
            inProgress: machineCoding.filter((m) => m.status === "In Progress").length,
            completed: machineCoding.filter((m) => m.status === "Completed").length
        }
    }

    return {
        register, handleSubmit, errors, addMachineCoding, dispatch,
        statusStyle, difficultyStyle, machineCoding, filterData, field, label,
        isUpdateFormOpen, updateMachineCoding, updateMachineCodingHandle, deleteMachineCoding, getStats
    }
}

export default useMachineCoding