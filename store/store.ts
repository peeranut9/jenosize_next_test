import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import userReducer from "./slices/userSlice";
import searchReducer from "./slices/searchSlice";
import dashboardReducer from "./slices/dashboardSlice";

const reducer = {
  user: userReducer,
  search: searchReducer,
  dashboard: dashboardReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
