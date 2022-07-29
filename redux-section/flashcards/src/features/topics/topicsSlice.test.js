import reducer, { addTopic, addQuizzId } from './topicsSlice.js';

describe('topicsSlice state', () => {
    it('should return default state', () => {
        const currentState = reducer(undefined, {});
        const expectedState = {topics: {}}
        expect(currentState).toEqual(expectedState)
    })


    it('should add a new topic', () => {
        const previousState = {
            topics: {}
        };
        const expectedState = {
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic1',
                    icon: 'icon url1',
                    quizIds: []
                }
            }
        };
        const resultState = reducer(previousState, addTopic({
            id: '123',
            name: 'example topic1',
            icon: 'icon url1',
            quizIds: []
        }));

        expect(resultState).toEqual(expectedState);

    });

    it('should handle a topic being added to an existing topics object', () => {
        const previousState = {
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic1',
                    icon: 'icon url1',
                    quizIds: []
                }
            }
        };

        const expectedState = {
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic1',
                    icon: 'icon url1',
                    quizIds: [],
                },
                '456': {
                    id: '456',
                    name: 'example topic2',
                    icon: 'icon url2',
                    quizIds: []
                }
            }
        }

        const resultState = reducer(previousState, addTopic({
            id: '456',
            name: 'example topic2',
            icon: 'icon url2',
            quizIds: []
        }));

        expect(resultState).toEqual(expectedState);
    });

    it('should add a quizz id to a topic', () => {
        const previousState = {
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic1',
                    icon: 'icon url1',
                    quizIds: []
                }
            }
        };

        const expectedState = {
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic1',
                    icon: 'icon url1',
                    quizIds: ['999']
                }
            }
        };

        const resultState = reducer(previousState, addQuizzId({
            quizId: '999',
            topicId: '123'
        }))

        expect(resultState).toEqual(expectedState);
    });

    it('should not add any quizz id when the topic does not exist', () => {
        const previousState = {
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic1',
                    icon: 'icon url1',
                    quizIds: []
                }
            }
        };

        const expectedState = {
            topics: {
                '123': {
                    id: '123',
                    name: 'example topic1',
                    icon: 'icon url1',
                    quizIds: []
                }
            }
        };

        const resultState = reducer(previousState, addQuizzId({
            quizId: '001',
            topicId: '989'
        }))

        expect(resultState).toEqual(expectedState);
    });


});
