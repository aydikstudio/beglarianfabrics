import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./Features/question/questionSlice";


export const store = configureStore({
    reducer: {
        question: questionSlice
    }
})