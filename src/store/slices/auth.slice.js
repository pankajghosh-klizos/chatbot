import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  status: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: intialState,
  reducers: {
    login(state, action) {
      state.status = true;
      state.user = action.payload;
    },
    logout(state) {
      state.status = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
