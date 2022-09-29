import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userInfoReducerStateType = {
  userInfo: {
    firstName: string;
    lastName: string;
    sex: string;
    birthday: any;
    ocean: string;
    hobby: string[];
  };
};

const initialState: userInfoReducerStateType = {
  userInfo: {
    firstName: "",
    lastName: "",
    sex: "",
    birthday: null,
    ocean: "",
    hobby: [],
  },
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        sex: string;
        birthday: any;
        ocean: string;
        hobby: string[];
      }>
    ) => {},
    setFirstName: (state, action: any) => {
      state.userInfo.firstName = action.payload;
    },
    setLastName: (state, action: any) => {
      state.userInfo.lastName = action.payload;
    },
    setSex: (state, action: any) => {
      state.userInfo.sex = action.payload;
    },
    setBirthday: (state, action: any) => {
      state.userInfo.birthday = action.payload;
    },
    setOcean: (state, action: any) => {
      state.userInfo.ocean = action.payload;
    },
    setHobby: (state, action: any) => {
      state.userInfo.hobby = action.payload;
    },
  },
});

export const {
  setUserInfo,
  setFirstName,
  setLastName,
  setSex,
  setBirthday,
  setOcean,
  setHobby,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;

export const UserInfoSelector = {
  getUserInfo: (state: any) => state.user.userInfo,
  getFirstName: (state: any) => state.user.userInfo.firstName,
  getLastName: (state: any) => state.user.userInfo.lastName,
  getSex: (state: any) => state.user.userInfo.sex,
  getBirthday: (state: any) => state.user.userInfo.birthday,
  getOcean: (state: any) => state.user.userInfo.ocean,
  getHobby: (state: any) => state.user.userInfo.hobby,
};
