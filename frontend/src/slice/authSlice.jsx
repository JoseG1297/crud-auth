import { createSlice } from '@reduxjs/toolkit'

export const authDataSlice = createSlice({
  name: 'authData',
  initialState: {
    sessionToken: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.sessionToken = action.payload.sessionToken
      state.user = action.payload.user
      state.isAuthenticated = true
    },
    clearAuthData: (state) => {
      state.sessionToken = null
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { setAuthData, clearAuthData } = authDataSlice.actions

export default authDataSlice.reducer