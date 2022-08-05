import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerResponse } from '../services/containerQuery';

interface OneState {
  name: string;
  statusState: boolean;
  dataState: boolean;
}

interface AllStates {
  //There may be a problem here because the keys we are adding are not literally "id"
  //ex: e08b7ffb0437706be2ba7082f6c38ab3fe1bd5d69f33b3a30f74ff790bcfb197
  id?: OneState;
}

const initialState: AllStates = {};

export const containerStatusSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getStates: (state: AllStates, data: PayloadAction<ContainerResponse>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // const newState: AllStates = {};
      for (let i = 0; i < data.payload.length; i++) {
        const currentId: string = data.payload[i].id;
        console.log(currentId);
        if (!(data.payload[i].id in state)) {
          //CONTINUE HERE
          state[currentId] = {
            name: 'test',
            statusState: true,
            dataState: true,
          };
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getStates } = containerStatusSlice.actions;

export default containerStatusSlice.reducer;
