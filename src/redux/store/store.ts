import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import AuthSlice from "../slices/authSlice";
import FileFolderSlice from "../slices/fileFoldersSlice";

const reducers = combineReducers({
  AuthSlice: AuthSlice,
  FileFolderSlice: FileFolderSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthSlice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
