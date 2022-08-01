import { createSlice } from "@reduxjs/toolkit";
import { addQuizzId } from "../topics/topicsSlice";

const initialState = {
    quizzes: {}
};

const options = {
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            const { id, topicId, name, cardIds } = action.payload;
            state.quizzes[id] = {
                id: id,
                topicId: topicId,
                name: name,
                cardIds: cardIds
            }
        }
    }
};

export const quizzesSlice = createSlice(options);

export const selectQuizzes = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export const addQuizThunk = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizzId(payload));
    }
}

export default quizzesSlice.reducer;

