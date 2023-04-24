import {
  SelectedDateMenuSelector,
  SelectedReportTypeSelector,
  selectDateMenu,
  selectReportType,
} from "@/store/slices/dashboardSlice";
import { useAppDispatch } from "@/store/store";
import { Box, Button, IconButton, styled, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import IosShareIcon from "@mui/icons-material/IosShare";

export default function DatePicker() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const selectedDate = useSelector(SelectedDateMenuSelector);
  const selectedReportType = useSelector(SelectedReportTypeSelector);

  const StyledButton = styled(Button)(({ active }: { active: boolean }) => ({
    textTransform: "none",
    borderRadius: 0,
    color: active ? "black" : theme.palette.secondary.main,
    borderBottom: active ? "solid 3px" : "solid 1px",
    borderColor: active
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  }));

  return (
    <Box>
      <Box
        className="flex pb-4"
        sx={{
          borderBottom: "solid 1px",
          borderColor: theme.palette.secondary.main,
        }}
      >
        <Box className="flex grow px-2 sm:px-5">
          <StyledButton
            className="w-full h-11 align-middle font-bold text-xs"
            active={selectedDate == 0}
            onClick={() => {
              dispatch(selectDateMenu(0));
            }}
          >
            Daily
          </StyledButton>
          <StyledButton
            className="w-full text-center h-11 align-middle font-bold text-xs"
            active={selectedDate == 1}
            onClick={() => {
              dispatch(selectDateMenu(1));
            }}
          >
            Weekly
          </StyledButton>
          <StyledButton
            className="w-full text-center h-11 align-middle font-bold text-xs"
            active={selectedDate == 2}
            onClick={() => {
              dispatch(selectDateMenu(2));
            }}
          >
            Monthly
          </StyledButton>
        </Box>
        <Box className="ml-auto">
          <IconButton
            className="h-11 mx-0 sm:mx-1"
            size="large"
            edge="start"
            color={selectedReportType == 0 ? "primary" : "secondary"}
            aria-label="menu"
            onClick={() => {
              dispatch(selectReportType(0));
            }}
          >
            <EqualizerIcon />
          </IconButton>
          <IconButton
            className="h-11 mx-0 sm:mx-1"
            size="large"
            edge="start"
            color={selectedReportType == 1 ? "primary" : "secondary"}
            aria-label="menu"
            onClick={() => {
              dispatch(selectReportType(1));
            }}
          >
            <FormatListBulletedIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className="flex pt-2 pl-4">
        <Box className="self-center text-xs"> 18 December 2019</Box>
        <Box className="text-xs ml-auto self-center">
          <IconButton
            size="small"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 1.5 }}
          >
            <IosShareIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
