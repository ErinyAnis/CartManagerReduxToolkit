// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, // for multible reducers
});

export default store;
