import { configureStore } from '@reduxjs/toolkit';
import employeeSlice from './employeeSlice';
import taskSlice from './taskSlice';

export const store = configureStore({
  reducer: {
    employee: employeeSlice,
    task: taskSlice,
  },
});

export default store;
