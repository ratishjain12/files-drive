import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUserData: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, clearUserData } = AuthSlice.actions;
export default AuthSlice.reducer;
