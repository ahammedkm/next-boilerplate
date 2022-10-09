import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "@redux/store";

export interface CommonSlice {
  isLoading: boolean;
}

const initialState: CommonSlice = {
  isLoading: false,
};

// #. Common slice contains the common state methods
export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    showLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { showLoader } = commonSlice.actions;

// #. State for loader component
export const selectIsLoading = (state: AppState) => state.common.isLoading;

// #. Export the reducers
export default commonSlice.reducer;
