import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearUser: (state) => {
      state.username = '';
      state.password = '';
    },
  },
});

export const { setUsername, setPassword, clearUser } = userSlice.actions;

export default userSlice.reducer;
