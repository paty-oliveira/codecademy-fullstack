import { configureStore } from "@reduxjs/toolkit";
import { topicsSlice } from "../features/topics/topicsSlice";
import { quizzesSlice } from "../features/quizzes/quizzesSlice";

export default configureStore({
    reducer: {
        topics: topicsSlice.reducer,
        quizzes: quizzesSlice.reducer
    }
});
