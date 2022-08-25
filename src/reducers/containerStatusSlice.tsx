//RTK Slice files are used to bundle Redux Action Types, Action Creators, and Reducers.
//This is where all the Redux logic sits except for backend calls. 

import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { ContainerResponse, AllStates, ObjectElement } from '../types';


// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes


//Initialize state to empty object
const initialState: AllStates = {};

export const containerStatusSlice = createSlice({
  name: 'containerStatus',
  initialState,
  reducers: {
    //Given query data (found in services folder) - update state with container status 
    getContainerStates: (
      state: AllStates,
      data: PayloadAction<ContainerResponse>
    ) => {
      //If received container data is not in state - add to state
      for (let i = 0; i < data.payload.length; i++) {
        const currentId: string = data.payload[i].id;
        if (!(data.payload[i].id in state)) {
          state[currentId] = {
            name: data.payload[i].name,
            statusState: data.payload[i].state,
            dataState: false,
          };
          //Else - if data has been changed - update state
        } else {
          state[currentId].statusState = data.payload[i].state;
          if (!data.payload[i].state) {
            state[currentId].dataState = false;
          }
        }
      }
    },
    //Mid-development button for console logging Global state
    logStateButton: (state: AllStates) => {
      console.log('newState: ', current(state));
    },

    //Updates state based on selected container status in dropdown menu
    toggleStatus: (state: AllStates, container: PayloadAction<ObjectElement>) => {
      state[container.payload.id].statusState = container.payload.state;
    },
    //Toggles data state to render metrics
    toggleData: (state: AllStates, id: PayloadAction<string>) => {
      state[id.payload].dataState = !current(state)[id.payload].dataState;
    },
    //Sets data state to off (used when container status is switched to paused/exited)
    toggleDataOff: (state: AllStates, id: PayloadAction<string>) => {
      state[id.payload].dataState = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getContainerStates,
  logStateButton,
  toggleStatus,
  toggleData,
  toggleDataOff,
} = containerStatusSlice.actions;

//Export reducer object
export default containerStatusSlice.reducer;
