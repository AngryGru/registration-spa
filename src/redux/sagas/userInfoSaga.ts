import { all, takeLatest, put, call } from "redux-saga/effects";

import {
  setUserInfo,
  setFirstName,
  setLastName,
  setSex,
  setBirthday,
  setOcean,
  setHobby,
} from "../reducers/userInfoReducer";

function* userInfoSaga(action: any) {
  const { firstName, lastName, sex, birthday, ocean, hobby } = action.payload;

  yield put(setFirstName(firstName));
  yield put(setLastName(lastName));
  yield put(setSex(sex));
  yield put(setBirthday(birthday));
  yield put(setOcean(ocean));
  yield put(setHobby(hobby));
}

export default function* userInfoWatcher() {
  yield all([takeLatest(setUserInfo, userInfoSaga)]);
}
