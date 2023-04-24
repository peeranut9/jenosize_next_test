import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as authService from "@/services/authService";
import { UserData } from "@/models/user.model";
import { RootState } from "../store";
import { httpServerAPI } from "@/utils/httpClient";
import { InternalAxiosRequestConfig } from "axios";
import { AuthUser } from "@/models/auth.model";
import { NextRouter } from "next/router";

export interface UserState {
  accessToken: string;
  error?: string;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user?: UserData;
}

const initialState: UserState = {
  accessToken: "",
  isAuthenticated: false,
  isAuthenticating: true,
  user: undefined,
};

interface SignInAction {
  email: string;
  password: string;
}

const setAPIToken = (userData: AuthUser | null) => {
  httpServerAPI.interceptors.request.use(
    (config?: InternalAxiosRequestConfig): InternalAxiosRequestConfig | any => {
      if (config && config.headers) {
        config.headers["api-key"] = userData ? userData.token : "";
      }
      return config;
    }
  );
};

export const signInWithEmail = createAsyncThunk(
  "user/signInEmail",
  async (user: SignInAction) => {
    const response = await authService.signInWithEmail(user);
    if (!response || response.error || !response.token) {
      throw new Error(response?.error || "Signin failed.");
    }
    setAPIToken(response);
    return response;
  }
);

export const signInWithGoogle = createAsyncThunk(
  "user/signInGoogle",
  async () => {
    const response = await authService.signInWithGoogle();
    if (!response || response.error || !response.token) {
      throw new Error(response?.error || "Signin failed.");
    }
    setAPIToken(response);
    return response;
  }
);

export const signInWithFacebook = createAsyncThunk(
  "user/signInFacebook",
  async () => {
    const response = await authService.signInWithFacebook();
    if (!response || response.error || !response.token) {
      throw new Error(response?.error || "Signin failed.");
    }
    setAPIToken(response);
    return response;
  }
);

export const getUserData = createAsyncThunk("user/getUserData", async () => {
  const response = await authService.getUserData();
  setAPIToken(response);
  return response;
});

export const signOut = createAsyncThunk(
  "user/signout",
  async (router: NextRouter) => {
    await authService.signOut();
    setAPIToken(null);
    router.push("/");
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fullfiled, pending, rejected
    builder.addCase(signInWithEmail.fulfilled, (state, action) => {
      state.error = undefined;
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
    });
    builder.addCase(signInWithEmail.rejected, (state, action) => {
      state.error = action.error.message;
      state.isAuthenticated = false;
      state.isAuthenticating = false;
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.error = undefined;
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.error = action.error.message;
      state.isAuthenticated = false;
      state.isAuthenticating = false;
    });
    builder.addCase(signInWithFacebook.fulfilled, (state, action) => {
      state.error = undefined;
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
    });
    builder.addCase(signInWithFacebook.rejected, (state, action) => {
      state.error = action.error.message;
      state.isAuthenticated = false;
      state.isAuthenticating = false;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.error = undefined;
      state.isAuthenticating = false;
      if (action.payload && action.payload.user && action.payload.token) {
        state.accessToken = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
      }
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.error = undefined;
      state.accessToken = "";
      state.user = undefined;
      state.isAuthenticated = false;
    });
  },
});

export const userSelector = (store: RootState): UserData | undefined =>
  store.user.user;
export const isAuthenticatedSelector = (store: RootState): boolean =>
  store.user.isAuthenticated;
export const isAuthenticatingSelector = (store: RootState): boolean =>
  store.user.isAuthenticating;
export const errorMessgeSelector = (store: RootState): string | undefined =>
  store.user.error;

export default userSlice.reducer;
