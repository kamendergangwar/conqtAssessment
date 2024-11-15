import { configureStore } from '@reduxjs/toolkit'
import ApiReducer from './features/ApiSlice'

export const store = configureStore({
  reducer: {
    api: ApiReducer,
  },
})