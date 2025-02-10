import { configureStore } from '@reduxjs/toolkit'

import authDataReducer from '../slice/authSlice'

export const store = configureStore({
  reducer: {
    authData: authDataReducer,
  },
})
