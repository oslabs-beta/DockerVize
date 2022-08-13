import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { ContainerResponse, AllStates } from '../types';

const initialState: AllStates = {};

export const containerStatusSlice = createSlice({
  name: 'containerStatus',
  initialState,
  reducers: {
    getContainerStates: (
      state: AllStates,
      data: PayloadAction<ContainerResponse>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      for (let i = 0; i < data.payload.length; i++) {
        const currentId: string = data.payload[i].id;
        if (!(data.payload[i].id in state)) {
          state[currentId] = {
            name: data.payload[i].name,
            statusState: data.payload[i].state === 'running',
            dataState: false,
          };
        }
      }
    },
    quitButton: (state: AllStates) => {
      console.log('newState: ', current(state));
    },
    toggleStatus: (state: AllStates, id: PayloadAction<string>) => {
      state[id.payload].statusState = !current(state)[id.payload].statusState;
      // console.log('this is state: ', current(state)[id.payload]);
    },
    toggleData: (state: AllStates, id: PayloadAction<string>) => {
      state[id.payload].dataState = !current(state)[id.payload].dataState;
      // console.log('this is state: ', current(state)[id.payload]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getContainerStates, quitButton, toggleStatus, toggleData } =
  containerStatusSlice.actions;

export default containerStatusSlice.reducer;
