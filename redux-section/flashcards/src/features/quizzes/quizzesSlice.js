import { createSlice } from "@reduxjs/toolkit";

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

const quizzesSlice = createSlice(options);

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;

