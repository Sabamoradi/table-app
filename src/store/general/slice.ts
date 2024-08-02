import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { State } from "./types";

const initialState: State = {
  status: "idle",
  closeModal: false,
  showNotification: false,
  notificationTitle: "",
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setFethingStatus: (state, action) => {
      state.status = action.payload;
    },
    set_closingModal: (state, action) => {
      state.closeModal = action.payload;
    },
    set_showNotification: (state, action) => {
      state.showNotification = action.payload;
    },
    set_notificationTitle: (state, action) => {
      state.notificationTitle = action.payload;
    },
  },
});

export const { setFethingStatus, set_closingModal, set_showNotification,set_notificationTitle } =
  generalSlice.actions;

export const selectFetchingStatus = (state: RootState) => state.general.status;
export const selectClosingModal = (state: RootState) =>
  state.general.closeModal;
export const selectShowNotification = (state: RootState) =>
  state.general.showNotification;

export const selectNotificationTitle = (state: RootState) => state.general.notificationTitle;

export default generalSlice.reducer;
