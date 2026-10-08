import { createSlice } from "@reduxjs/toolkit";

let machineCodingSlice = createSlice({
    name: "machineCoding",
    initialState: {
        allMachineCoding: JSON.parse(localStorage.getItem("machineCoding")) || [],
        isUpdateFormOpen: false,
        updateMachineCoding: null
    },
    reducers: {
        setMachineCoding: (state, action) => {
            state.allMachineCoding = action.payload
            localStorage.setItem("machineCoding", JSON.stringify(action.payload))
        },
        setUpdateMachineCoding: (state, action) => {
            state.updateMachineCoding = action.payload
        },
        setFormOpen: (state, action) => {
            state.isUpdateFormOpen = action.payload
        }
    }
})

export const { setMachineCoding, setUpdateMachineCoding, setFormOpen } = machineCodingSlice.actions

export default machineCodingSlice.reducer