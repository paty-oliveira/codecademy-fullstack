import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";

export default configureStore({
    reducer: {
        topics: topicsReducer
    }
});
