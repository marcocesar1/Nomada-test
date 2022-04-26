import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './slices/searchSlice';
import actorReducer from './slices/actorSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    actor: actorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch