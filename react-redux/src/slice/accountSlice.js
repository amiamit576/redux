import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 1,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer