import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];


const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const options = {
  name: 'budgets',
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      const newBudgets = state.map(budget => {
        if (budget.category === action.payload.category) {
          return action.payload;
        }
        return budget;
      })
      return newBudgets;
    }
  }
}

const budgetSlice = createSlice(options);

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
