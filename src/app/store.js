import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../feature/Questions/state/QuestionSlice"
import filterReducer from "../feature/Questions/state/QuestionFilterSlice"
import machineCodingReducer from "../feature/Machine-Coding/state/MachineCodingSlice"
import machineCodingFilterReducer from "../feature/Machine-Coding/state/MachineCodingFilterSlice"

export let store = configureStore({
    reducer : {
        questions : questionReducer,
        filterQuestion : filterReducer,
        machineCoding : machineCodingReducer,
        machineCodingFilter : machineCodingFilterReducer
    }
})