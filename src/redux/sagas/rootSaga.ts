import { all } from "redux-saga/effects";
import signupWatcher from "./signupSaga";
import userInfoWatcher from "./userInfoSaga";

export default function* rootSaga() {
  yield all([signupWatcher(), userInfoWatcher()]);
}
