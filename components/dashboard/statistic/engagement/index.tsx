import React from "react";
import DialyReport from "./daily";
import { Box } from "@mui/material";
import DatePicker from "./datePicker";
import ReportList from "./reportList";
import { useSelector } from "react-redux";
import {
  SelectedDateTypeSelector,
  SelectedReportTypeSelector,
} from "@/store/slices/dashboardSlice";
import Expanded from "@/components/expanded";
import Chart from "./chart";

export default function Engagement() {
  const selectedType = useSelector(SelectedReportTypeSelector);
  const selectedDateType = useSelector(SelectedDateTypeSelector);
  return (
    <Expanded className="mt-3">
      <DatePicker />
      {selectedType == 0 &&
        (selectedDateType == 0 ? <DialyReport /> : <Chart />)}
      {selectedType == 1 && <ReportList />}
    </Expanded>
  );
}
