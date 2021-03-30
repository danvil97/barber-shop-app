import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './features/services';
import userReducer from './features/user';

export default configureStore({
  reducer: {
    services: servicesReducer,
    user: userReducer,
  },
});
