import ApiAxios from "../../../axios";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IChangeUser } from "../../../../models";

export const GetUser = createAsyncThunk(
  "task/GetUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await ApiAxios.get("/users/profile");
      const data = await res.data;
      console.log("data--------------------->", data )
      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        return Promise.reject("Something Wrong");
      }
    }
  }
);

export const ChangeUser = createAsyncThunk(
  "user/ChangeUser",
  async (newData: IChangeUser, { rejectWithValue }) => {
    try {
      const res = await ApiAxios.patch("/users/profile", {
        email: newData.newEmail,
        firstName: newData.firstName,
        lastName: newData.lastName,
      });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("Something is Wrong");
      } 
    }
  }
);
