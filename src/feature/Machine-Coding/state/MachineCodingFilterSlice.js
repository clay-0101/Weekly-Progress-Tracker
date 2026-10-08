import { createSlice } from "@reduxjs/toolkit";

let machineCodingFilterSlice = createSlice({
    name : "machineCodingFilter",
    initialState : {
        status : 'All',
        difficulty : 'All',
        search : ""
    },
    reducers : {
        setStatus : (state, action) =>{
            state.status = action.payload
        },
        setDifficulty : (state, action) =>{
            state.difficulty = action.payload
        },
        setSearch : (state, action) =>{
            state.search = action.payload
        }
    }
})

export const {setDifficulty, setStatus, setSearch} = machineCodingFilterSlice.actions

export default machineCodingFilterSlice.reducer