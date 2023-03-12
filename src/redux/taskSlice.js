import { createSlice } from '@reduxjs/toolkit';
import tasks from '../assets/task_data';

const initialState = {
  taskArr: tasks,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.taskArr.push(payload);
    },
    removeTask: (state, { payload }) => {
      state.taskArr = state.taskArr.filter(
        (item) => item.id !== payload
      );
    },
    updateTask: (state, { payload }) => {
      state.taskArr = state.taskArr.map((item, index) => {
        if (index === item.id) {
          return payload;
        }
        return item;
      });
    },
  },
});

export const { addTask, removeTask, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;