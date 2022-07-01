import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./slices/accessTokenSlice";
import userSlice from "./slices/userSlice";
import tracksSlice from "./slices/tracksSlice";

export const store =  configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    user: userSlice,
    tracks: tracksSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;