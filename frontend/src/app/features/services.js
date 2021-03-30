/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import endpoints from './endpoints';

export const servicesSlice = createSlice({
  name: 'services',
  initialState: { isLoading: false, hasErrors: false, services: [] },
  reducers: {
    getServices: (state) => {
      state.isLoading = true;
    },
    getServicesSuccess: (state, { payload }) => {
      state.services = payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    getServicesFailure: (state) => {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

export const servicesSelector = (state) => state.services;
export const { getServices, getServicesSuccess, getServicesFailure } = servicesSlice.actions;
export default servicesSlice.reducer;

export function fetchServices() {
  return async (dispatch) => {
    dispatch(getServices());
    await axios
      .get(endpoints.services)
      .then((res) => dispatch(getServicesSuccess(res.data)))
      .catch(() => {
        dispatch(getServicesFailure());
      });
  };
}
