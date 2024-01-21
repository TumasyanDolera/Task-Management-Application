import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiAxios from "../../../axios";
import { ISignInForm } from "../../../../models";
import { saveAccessToken } from "../../../../helpers";
import { IForm } from "../../../../models";
import axios from "axios";

export const UserLogin = createAsyncThunk("userAuth/PostLog", async ({ email, password }: ISignInForm,
    { rejectWithValue, fulfillWithValue }) => {
    try {
        const { data } = await ApiAxios.post('/auth/login',
            { email, password })
        console.log(data?.data)
            const accessToken = data.data.accessToken;
            const refreshToken = data.data.refreshToken
            saveAccessToken(accessToken, refreshToken);
            console.log(data.data, 'data')
        return fulfillWithValue(data.data.accessToken)
    } catch (error:any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})
export const ChangePassword = createAsyncThunk(
    "user/changePassword",
    async (newPassword: string, { rejectWithValue }) => {
      try {
        const res = await ApiAxios.patch("/auth/password", { newPassword });
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

export const UserRegister = createAsyncThunk('userAuth/UserRegister',
 async ({firstName, lastName, password, email }: IForm, { rejectWithValue }) => {
        try {
            const { data } = await ApiAxios.post('/auth/register',
                JSON.stringify({ firstName, lastName, email, password }))
                console.log(JSON.stringify(data?.data));
            return data
      } catch (error:any) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )
