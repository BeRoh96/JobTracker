import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
