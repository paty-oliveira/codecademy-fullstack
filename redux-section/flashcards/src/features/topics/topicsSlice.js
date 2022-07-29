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
        },
        addQuizzId: (state, action) => {
            const { quizId, topicId } = action.payload;

            if (topicId in state.topics){
                state.topics[topicId].quizIds.push(quizId)
            }
            return;
        }
    }
}

const topicsSlice = createSlice(options);

export const selectTopics = state => state.topics.topics;

export const { addTopic, addQuizzId } = topicsSlice.actions;

export default topicsSlice.reducer;
