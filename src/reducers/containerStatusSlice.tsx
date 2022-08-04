import { createSlice } from '@reduxjs/toolkit';

interface OneState {
  name: string;
  statusState: boolean;
  dataState: boolean;
}

interface AllStates {
  id?: OneState;
}

const initialState: AllStates = {};

export const containerStatusSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getStates: () => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.id.statusState = !state.id.statusState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getStates } = containerStatusSlice.actions;

export default containerStatusSlice.reducer;
