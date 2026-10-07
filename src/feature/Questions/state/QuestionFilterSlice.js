import { createSlice } from "@reduxjs/toolkit";

let filterSlice = createSlice({
    name : "filter",
    initialState : {
        status : 'All',
        category : 'All',
        difficulty : 'All',
        search : ""
    },
    reducers : {
        setStatus : (state , action) =>{
            state.status = action.payload
        },
        setCategory : (state , action) =>{
            state.category = action.payload
        },
        setDifficulty : (state , action) =>{
            state.difficulty = action.payload
        },
        setSearch : (state, action) => {
            state.search = action.payload
        }
    }
})

export const {setCategory, setDifficulty, setStatus, setSearch}  = filterSlice.actions

export default filterSlice.reducer