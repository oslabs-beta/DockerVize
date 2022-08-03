import { configureStore } from '@reduxjs/toolkit';

import statusToggleReducer from './reducers/containerStatusSlice';

// import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    statusToggle: statusToggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
