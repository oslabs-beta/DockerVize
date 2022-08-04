import { createSlice } from '@reduxjs/toolkit';

export interface ToggleState {
  statusToggle: boolean;
  dataToggle: boolean;
}

export interface ContainerState {
  id?: ToggleState;
}

const initialState: ContainerState = {
  //Intialize state based on containers status at runtime
};

export const containerStatusSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggle: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = containerStatusSlice.actions;

export default containerStatusSlice.reducer;
