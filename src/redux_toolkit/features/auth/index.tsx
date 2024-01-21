import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../../../models";
import { UserLogin, UserRegister, ChangePassword } from "../../services";

const initialState: IAuthState = {
  loading: false,
  userInfo: null,
  accessToken: '',
  error: null,
  success: false,
  isSaveChnages: false,
}

const userSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        state.accessToken = action.payload;
      })
      .addCase(UserLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      })
      .addCase(UserRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UserRegister.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(UserRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    //  Change Password !!!!!
    builder.addCase(ChangePassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ChangePassword.fulfilled, (state) => {
      state.loading = false;
      state.isSaveChnages = true;
    });
    builder.addCase(ChangePassword.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      } else {
        state.error = "something_wrong";
      }
    });
  }
});


export const { setToken } = userSlice.actions
export const userAuth = userSlice.reducer;
export const selectAccessToken = (state: { userAuth: IAuthState }) => state.userAuth.accessToken;