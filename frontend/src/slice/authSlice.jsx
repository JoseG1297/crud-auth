import { createSlice } from '@reduxjs/toolkit'

export const authDataSlice = createSlice({
  name: 'authData',
  initialState: {
    authToken: null,
    user: null,
    isAuthenticated: false,
    errors: null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.authToken = action.payload.authToken,
      state.user = action.payload, 
      state.isAuthenticated = true,
      state.errors = null
    },
    clearAuthData: (state) => {
      state.authToken = null
      state.user = null
      state.isAuthenticated = false,
      state.errors = null
    },
    setAuthErrors: (state, action) => {
      state.errors = action.payload
    }
  },
})

export const { setAuthData, clearAuthData, setAuthErrors } = authDataSlice.actions

export default authDataSlice.reducer