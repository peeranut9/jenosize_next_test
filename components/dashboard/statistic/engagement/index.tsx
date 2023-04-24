import React from "react";
import EngagementReport from "./daily";
import { Box } from "@mui/material";
import DatePicker from "./datePicker";

export default function Engagement() {
  return (
    <Box
      flexGrow={1}
      display="flex"
      flexDirection="column"
      className="mt-3 h-full"
    >
      <DatePicker></DatePicker>
      <EngagementReport></EngagementReport>
    </Box>
  );
}
