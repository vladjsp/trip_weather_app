import { configureStore } from '@reduxjs/toolkit';

import weatherSlice from './slices/weatherSlice';
import modalsSlice from './slices/modalsSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    modals: modalsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
