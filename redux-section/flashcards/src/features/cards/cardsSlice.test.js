import reducer, { addCard } from './cardsSlice.js';

describe('cardsSlice state', () => {
    it('should return default state', () => {
        const currentState = reducer(undefined, {});
        const expectedState = {cards: {}};
        expect(currentState).toEqual(expectedState);
    });

    it('should add a new card', () => {
        const previousState = {
            cards: {}
        };

        const payload = {
            id: '123',
            front: 'front of card',
            back: 'back of card'
        }

        const expectedState = {
            cards: {
                '123': {
                    id: '123',
                    front: 'front of card',
                    back: 'back of card'
                }
            }
        }

        const resultState = reducer(previousState, addCard(payload));

        expect(resultState).toEqual(expectedState);
    });

    it('should add a new card to an existing cards object', () => {
        const previousState = {
            cards: {
                '123': {
                    id: '123',
                    front: 'front of card',
                    back: 'back of card'
                }
            }
        }

        const payload = {
            id: '009',
            front: 'front of card 009',
            back: 'back of card 009'
        }

        const expectedState = {
            cards: {
                '123': {
                    id: '123',
                    front: 'front of card',
                    back: 'back of card'
                },
                '009': {
                    id: '009',
                    front: 'front of card 009',
                    back: 'back of card 009'
                }
            }
        }

        const resultState = reducer(previousState, addCard(payload));

        expect(resultState).toEqual(expectedState);
    });
});
