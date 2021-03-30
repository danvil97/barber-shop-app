/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import endpoints from './endpoints';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoading: false,
    hasError: false,
    errorMessage: '',
  },
  reducers: {
    createUser: (state) => {
      state.isLoading = true;
    },
    createUserSuccess: (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
      state.hasErrors = false;
    },
    createUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.hasErrors = true;
      state.errorMessage = payload.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const userSelector = (state) => state.user;
export const { createUser, createUserSuccess, createUserFailure } = userSlice.actions;
export default userSlice.reducer;

export function signUp(newUserData) {
  return async (dispatch) => {
    dispatch(createUser());
    await axios
      .post(endpoints.users, newUserData)
      .then((res) => dispatch(createUserSuccess(res.data)))
      .catch((res) => {
        dispatch(createUserFailure(res.data));
      });
  };
}
