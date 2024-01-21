import { createSlice } from '@reduxjs/toolkit'
import { CreateTask, GetTask, UpdateTask, DeleteTask, GetSingleTask } from '../../services';
import { ITaskState } from '../../../models';

const initialState: ITaskState = {
  tasks: [],
  loading: false,
  error: null,
  singleTask: null, 
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

     //  CreateTask !!!!!
      .addCase(CreateTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateTask.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload !== undefined) {
          state.tasks = action.payload;
        } else {
          state.tasks = [];
        }
      })
      .addCase(CreateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })

       //  GatTask !!!!!
      .addCase(GetTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload
      })
      .addCase(GetTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

       //  UpdateTask !!!!!
    builder.addCase(UpdateTask.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(UpdateTask.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action)
      // state.tasks = state.tasks.map((task) =>
      //   task.id === action.payload.id ? action.payload : task
      // );
    })
    builder.addCase(UpdateTask.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      console.log(action)
    })

     //  DeleateTask !!!!!
      .addCase(DeleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteTask.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(DeleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GetSingleTask !!!!!
      builder.addCase(GetSingleTask.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(GetSingleTask.rejected, (state, action) => {
        if (typeof action.payload === "string") {
          state.error = action.error.message;
        } else {
          state.error = "something_wrong";
        }
        state.loading = false;
      });
      builder.addCase(GetSingleTask.fulfilled, (state, action) => {
        state.singleTask = action.payload.data;
        state.loading = false;
      });
    },
  });
  
export const { } = taskSlice.actions;
export const taskReduser = taskSlice.reducer
