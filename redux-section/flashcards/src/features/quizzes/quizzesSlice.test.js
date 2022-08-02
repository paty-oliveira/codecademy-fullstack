import reducer, { addQuiz } from './quizzesSlice.js';

describe('quizzesSlice state', () => {
    it('should return default state', () => {
        const currentState = reducer(undefined, {});
        const expectedState = {quizzes: {}};
        expect(currentState).toEqual(expectedState);
    });

    it('should add a new quiz', () => {
        const previousState = {
            quizzes: {}
        }

        const expectedState = {
            quizzes: {
                '456': {
                    id: '456',
                    topicId: '123',
                    name: 'quiz for example topic',
                    cardIds: ['789', '101', '102']
                  }
            }
        }

        const resultState = reducer(previousState, addQuiz({
            id: '456',
            topicId: '123',
            name: 'quiz for example topic',
            cardIds: ['789', '101', '102']
        }))

        expect(resultState).toEqual(expectedState);
    });

    it('should add a new quiz to an existing quizzes object', () => {
        const previousState = {
            quizzes: {
                '456': {
                    id: '456',
                    topicId: '123',
                    name: 'quiz for example topic',
                    cardIds: ['789', '101', '102']
                }
            }
        }

        const expectedState = {
            quizzes: {
                '456': {
                    id: '456',
                    topicId: '123',
                    name: 'quiz for example topic',
                    cardIds: ['789', '101', '102']
                },
                '789': {
                    id: '789',
                    topicId: '000',
                    name: 'anoter quiz for example',
                    cardIds: ['888']
                }
            }
        }

        const resultState = reducer(previousState, addQuiz({
            id: '789',
            topicId: '000',
            name: 'anoter quiz for example',
            cardIds: ['888']
        }))

        expect(resultState).toEqual(expectedState);
    });
});
