import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "taskData",
  initialState: {
    tasks: [],
    task: null,
    errors: null,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
      state.errors = null;
    },
    setTask: (state, action) => {
      state.task = action.payload;
      state.errors = null;
    },
    clearTask: (state) => {
      state.task = null;
      state.errors = null;
    },
    setTaskErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setTasks, setTask, clearTask, setTaskErrors } =
  taskSlice.actions;

export default taskSlice.reducer;
