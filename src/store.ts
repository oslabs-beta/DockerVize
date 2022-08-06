import { configureStore } from '@reduxjs/toolkit';
import { containerAPI } from './services/containerQuery';

import statusToggleReducer from './reducers/containerStatusSlice';

// import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    [containerAPI.reducerPath]: containerAPI.reducer,
    statusToggle: statusToggleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(containerAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
