import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices'

function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
  })

  return store
}

export const store = configureAppStore();