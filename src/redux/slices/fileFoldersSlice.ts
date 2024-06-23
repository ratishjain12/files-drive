import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  DocumentData,
} from "firebase/firestore";
import { firestore } from "../../config/firebase";

type Initial = {
  isLoading: boolean;
  currentFolder: string;
  userFolders: DocumentData[];
  userFiles: string[];
  adminFolders: DocumentData[];
  adminFiles: string[];
};

const initialState: Initial = {
  isLoading: false,
  currentFolder: "root",
  userFolders: [],
  userFiles: [],
  adminFolders: [],
  adminFiles: [],
};

const convertTimestamps = (data: DocumentData[]) => {
  return data.map((item) => {
    const newItem = { ...item };
    for (const key in newItem) {
      if (newItem[key]?.seconds) {
        newItem[key] = new Date(newItem[key].seconds * 1000);
      }
    }
    return newItem;
  });
};

export const fetchUserFolders = createAsyncThunk(
  "fileFolder/fetchUserFolders",
  async (userId: string, thunkAPI) => {
    try {
      const ref = query(
        collection(firestore, "folders"),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(ref);
      const newData = querySnapshot.docs.map((doc) => doc.data());
      return convertTimestamps(newData);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fileFolderSlice = createSlice({
  name: "fileFolder",
  initialState,
  reducers: {
    addFolder: (state, action) => {
      addDoc(collection(firestore, "folders"), action.payload);
      state.userFolders = [...state.userFolders, action.payload];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFolders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserFolders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userFolders = action.payload;
      })
      .addCase(fetchUserFolders.rejected, (state, action) => {
        state.isLoading = false;
        console.error("Error fetching folders:", action.payload);
      });
  },
});

export const { addFolder, setLoading } = fileFolderSlice.actions;
export default fileFolderSlice.reducer;
