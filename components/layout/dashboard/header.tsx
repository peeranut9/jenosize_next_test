import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React from "react";
import HouseIcon from "@mui/icons-material/House";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { SelectedMenuSelector } from "@/store/slices/dashboardSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const selectedMenu = useSelector(SelectedMenuSelector);
  let selectedHeader;
  switch (selectedMenu) {
    case 0:
      selectedHeader = "Write";
      break;
    case 1:
      selectedHeader = "Approval";
      break;
    case 2:
      selectedHeader = "Report";
      break;
    case 3:
      selectedHeader = "All Report";
      break;
    case 4:
      selectedHeader = "Setting";
      break;
    default:
      selectedHeader = "Write";
  }
  return (
    <AppBar position="sticky" sx={{ height: "4rem" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => router.push(`/`)}
        >
          <HouseIcon />
        </IconButton>
        <Box className="mx-auto flex">
          <Button sx={{ color: "white", textTransform: "none" }}>
            <span className="self-center text-lg font-bold">
              {selectedHeader}
            </span>
            <ExpandMoreRoundedIcon className="self-center ml-5"></ExpandMoreRoundedIcon>
          </Button>
        </Box>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <TuneRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
