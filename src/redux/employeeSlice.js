import { createSlice } from '@reduxjs/toolkit';
import employees from '../assets/mock_data';

const initialState = {
  employeeArr: employees,
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, { payload }) => {
      state.employeeArr.push(payload);
    },
    removeEmployee: (state, { payload }) => {
      state.employeeArr = state.employeeArr.filter(
        (item) => item.id !== payload
      );
    },
    updateEmployee: (state, { payload }) => {
      state.employeeArr = state.employeeArr.map((item, index) => {
        if (index === item.id) {
          return payload;
        }
        return item;
      });
    },
  },
});

export const { addEmployee, removeEmployee, updateEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
