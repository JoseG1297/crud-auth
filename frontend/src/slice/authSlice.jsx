import { createSlice } from '@reduxjs/toolkit'

export const authDataSlice = createSlice({
  name: 'authData',
  initialState: {
    sessionToken: null,
    user: null,
    isAuthenticated: false,
    errors: null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.sessionToken = action.payload.sessionToken
      state.user = action.payload.user
      state.isAuthenticated = true,
      state.errors = null
    },
    clearAuthData: (state) => {
      state.sessionToken = null
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