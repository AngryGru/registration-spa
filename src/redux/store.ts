import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
import signupReducer from "./reducers/signupReducer";
import userInfoReducer from "./reducers/userInfoReducer";

import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

declare global {
  interface Window {
    REDUX_DEVTOOLS_EXTENSION_COMPOSE?: typeof compose;
  }
}

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: signupReducer,
  user: userInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
