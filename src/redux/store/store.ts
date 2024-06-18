import { configureStore, Tuple } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import AuthSlice from "../slices/authSlice";

const reducers = combineReducers({
  AuthSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple(thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
