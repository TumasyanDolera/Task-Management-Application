import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiAxios from '../../../axios'
import axios from 'axios';
import { IPostTask, IUpdateTask } from '../../../../models';

export const CreateTask = createAsyncThunk('task/CreateTask',
  async ({ title, description, dueDate }: IPostTask, { rejectWithValue }) => {
    try {
      const response = await ApiAxios.post('/tasks', ({ title, description, dueDate }));
      console.log(response.data);
      return response.data,
        console.log(response.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue("Something Wrong");
      }
    }
  }
);

export const GetTask = createAsyncThunk(
  "task/GetTask",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApiAxios.get('/tasks/?take=10&skip=0');
      if (response.data) {
        console.log(response.data, "response")
        return response.data;
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue("Something Wrong");
      }

    }
  }
);

export const UpdateTask = createAsyncThunk("task/UpdateTask",
  async ({ id, task }: any, { rejectWithValue }) => {
    try {
      console.log(id, task)
      const res = await ApiAxios.patch(`tasks/${id}`, {
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        status: "Done"
      });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something Wrong");
      }
    }
  });


export const DeleteTask = createAsyncThunk(
  'task/DeleteTask',
  async (id: null, { rejectWithValue }) => {
    try {
      const res = await ApiAxios.delete(`/tasks/${id}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        return Promise.reject("Something Wrong");
      }
    }
  }
);

export const GetSingleTask = createAsyncThunk(
  "tasks/GetSingleTask",
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await ApiAxios.get(`tasks/${id}`,);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        return Promise.reject("Something Wrong");
      }
    }
  }
);
