import { createSlice } from '@reduxjs/toolkit'
import { GetUser } from '../../services';
import { IUser } from '../../../models';
import { ChangeUser } from '../../services/thunck/user';
import { IUserRedux } from '../../../models/iInputForm';
// import { ChangeUser } from '../../services/authactions/user';



const initialState: IUserRedux   = {
  user: null,
  loading: false,
  error: null
}

export const postSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(GetUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    builder.addCase(ChangeUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ChangeUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.loading = false;
    });
    builder.addCase(ChangeUser.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      } else {
        state.error = "something_wrong";
      }
    });
  },
})

export const postReducer = postSlice.reducer
