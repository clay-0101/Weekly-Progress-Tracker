import { createSlice } from "@reduxjs/toolkit";

let questionSlice = createSlice({
    name : "questions",
    initialState : {
        allQuestions : JSON.parse(localStorage.getItem("questions")) || [],
        isUpdateFormOpen : false,
        updateQuestion : null 
    },
    reducers : {
        setQuestion : (state , action) => {
            state.allQuestions = action.payload
            localStorage.setItem("questions", JSON.stringify(action.payload))
        },
        setUpdateQuestion : (state , action) =>{
            state.updateQuestion = action.payload
        },
        setFormOpen : (state , action) => {
            state.isUpdateFormOpen = action.payload
        }
    }
})

export const {setQuestion, setUpdateQuestion, setFormOpen} = questionSlice.actions

export default questionSlice.reducer