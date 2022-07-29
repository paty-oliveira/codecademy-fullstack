import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: {}
}

const options = {
    name: "topics",
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            const newTopic = {
                    id: id,
                    name: name,
                    icon: icon,
                    quizIds: []
            }

            state.topics[id] = newTopic;
        }
    }
}

const topicsSlice = createSlice(options);

export const selectTopics = state => state.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
