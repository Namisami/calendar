import { CalendarRow } from "@/api/base.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TaskSlice {
  tasks: CalendarRow[];
}

const initialState: TaskSlice = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<CalendarRow[]>) => { state.tasks = action.payload },
  }
});

export const { setTasks } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
