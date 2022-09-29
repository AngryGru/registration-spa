import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SignupReducerStateType = {
  isLoggedIn: boolean;
  phone: any;
  email: string;
};

const initialState: SignupReducerStateType = {
  isLoggedIn: false,
  phone: null,
  email: "",
};

const signupSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupUser: (
      state,
      action: PayloadAction<{
        phone: string;
        email: string;
        password: string;
        repeatedPassword: string;
      }>
    ) => {},
    setLogStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    getUserInfo: (state, action) => {},
    setPhone: (state, action: any) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: any) => {
      state.email = action.payload;
    },
  },
});

export const { signupUser, setLogStatus, getUserInfo, setPhone, setEmail } =
  signupSlice.actions;

export default signupSlice.reducer;

export const SignupSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getPhone: (state: any) => state.auth.phone,
  getEmail: (state: any) => state.auth.email,
};
