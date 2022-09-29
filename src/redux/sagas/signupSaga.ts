import { all, takeLatest, put, call } from "redux-saga/effects";

import {
  signupUser,
  setLogStatus,
  setPhone,
  setEmail,
} from "../reducers/signupReducer";

function* signupSaga(action: any) {
  const { phone, email } = action.payload;

  yield put(setLogStatus(true));
  yield put(setPhone(phone || ""));
  yield put(setEmail(email || ""));
}

export default function* signupWatcher() {
  yield all([takeLatest(signupUser, signupSaga)]);
}
