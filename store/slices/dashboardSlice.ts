import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    showBottomBar: false,
    selectedMenu: 3,
    selectedStatisticMenu: 1,
    selectedDateMenu: 0,
    selectedCategoryMenu: 0,
    selectedReportType: 0,
  },
  reducers: {
    selectMenu: (state, action) => {
      state.selectedMenu = action.payload;
    },
    selectStatisticMenu: (state, action) => {
      state.selectedStatisticMenu = action.payload;
    },
    selectDateMenu: (state, action) => {
      state.selectedDateMenu = action.payload;
    },
    selectCategoryMenu: (state, action) => {
      state.selectedCategoryMenu = action.payload;
    },
    selectReportType: (state, action) => {
      state.selectedReportType = action.payload;
    },
  },
});

export const {
  selectMenu,
  selectStatisticMenu,
  selectDateMenu,
  selectCategoryMenu,
  selectReportType,
} = dashboardSlice.actions;

export const SelectedMenuSelector = (store: RootState): number =>
  store.dashboard.selectedMenu;
export const SelectedStatisticMenuSelector = (store: RootState): number =>
  store.dashboard.selectedStatisticMenu;
export const SelectedDateMenuSelector = (store: RootState): number =>
  store.dashboard.selectedDateMenu;
export const SelectedCategoryMenuSelector = (store: RootState): number =>
  store.dashboard.selectedCategoryMenu;
export const SelectedReportTypeSelector = (store: RootState): number =>
  store.dashboard.selectedReportType;
export default dashboardSlice.reducer;
