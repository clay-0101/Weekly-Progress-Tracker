import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../feature/Questions/state/QuestionSlice"
import filterReducer from "../feature/Questions/state/QuestionFilterSlice"

export let store = configureStore({
    reducer : {
        questions : questionReducer,
        filterQuestion : filterReducer
    }
})