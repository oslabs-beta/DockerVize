import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { ContainerResponse } from '../types';

interface OneState {
  name: string;
  statusState: boolean;
  dataState: boolean;
}

interface AllStates {
  //There may be a problem here because the keys we are adding are not literally "id"
  //ex: e08b7ffb0437706be2ba7082f6c38ab3fe1bd5d69f33b3a30f74ff790bcfb197
  [id: string]: OneState;
}

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
        console.log(data.payload);
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
  },
});

// Action creators are generated for each case reducer function
export const { getContainerStates, quitButton } = containerStatusSlice.actions;

export default containerStatusSlice.reducer;
