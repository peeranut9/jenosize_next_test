import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SendIcon from "@mui/icons-material/Send";
import PieChartIcon from "@mui/icons-material/PieChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectedMenuSelector,
  selectMenu,
} from "@/store/slices/dashboardSlice";

export default function Footer() {
  //Use Link if want to change router
  const selectedMenu = useSelector(SelectedMenuSelector);
  const dispatch = useDispatch();
  return (
    <BottomNavigation
      className="bottom-navigation"
      sx={{
        height: "4rem",
        backgroundColor: "white",
        padding: 0,
        margin: 0,
        justifyContent: "space-between",
      }}
      showLabels
      value={selectedMenu}
      onChange={(event, newValue) => {
        dispatch(selectMenu(newValue));
      }}
    >
      <BottomNavigationAction label="Wrtie" icon={<NoteAltIcon />} />
      <BottomNavigationAction label="Approval" icon={<CheckCircleIcon />} />
      <BottomNavigationAction label="Report" icon={<SendIcon />} />
      <BottomNavigationAction label="Statistic" icon={<PieChartIcon />} />
      <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}
