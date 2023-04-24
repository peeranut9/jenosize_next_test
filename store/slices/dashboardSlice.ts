import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    showBottomBar: false,
    selectedMenu: 3,
    selectedStatisticMenu: 1,
    selectedDateType: 0,
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
    selectDateType: (state, action) => {
      state.selectedDateType = action.payload;
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
  selectDateType,
  selectCategoryMenu,
  selectReportType,
} = dashboardSlice.actions;

export const SelectedMenuSelector = (store: RootState): number =>
  store.dashboard.selectedMenu;
export const SelectedStatisticMenuSelector = (store: RootState): number =>
  store.dashboard.selectedStatisticMenu;
export const SelectedDateTypeSelector = (store: RootState): number =>
  store.dashboard.selectedDateType;
export const SelectedCategoryMenuSelector = (store: RootState): number =>
  store.dashboard.selectedCategoryMenu;
export const SelectedReportTypeSelector = (store: RootState): number =>
  store.dashboard.selectedReportType;
export default dashboardSlice.reducer;
