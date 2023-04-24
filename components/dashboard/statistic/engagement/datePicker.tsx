import {
  SelectedDateTypeSelector,
  SelectedReportTypeSelector,
  selectDateType,
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
  const selectedDate = useSelector(SelectedDateTypeSelector);
  const selectedReportType = useSelector(SelectedReportTypeSelector);

  const StyledButton = styled(Button)(({ active }: { active: string }) => ({
    textTransform: "none",
    borderRadius: 0,
    color: active == "true" ? "black" : theme.palette.secondary.main,
    borderBottom: active == "true" ? "solid 3px" : "solid 1px",
    borderColor:
      active == "true"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
  }));

  return (
    <Box>
      <Box
        className="flex h-16"
        sx={{
          borderBottom: "solid 1px",
          borderColor: theme.palette.secondary.main,
        }}
      >
        <Box className="flex grow px-2 sm:px-5">
          <StyledButton
            className="w-full h-11 align-middle font-bold text-xs"
            active={(selectedDate == 0).toString()}
            onClick={() => {
              dispatch(selectDateType(0));
            }}
          >
            Daily
          </StyledButton>
          <StyledButton
            className="w-full text-center h-11 align-middle font-bold text-xs"
            active={(selectedDate == 1).toString()}
            onClick={() => {
              dispatch(selectDateType(1));
            }}
          >
            Weekly
          </StyledButton>
          <StyledButton
            className="w-full text-center h-11 align-middle font-bold text-xs"
            active={(selectedDate == 2).toString()}
            onClick={() => {
              dispatch(selectDateType(2));
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
      <Box className="flex pt-2 pl-6 pr-2 h-11">
        <Box className="self-center text-xs">
          {selectedDate == 0 ? "18 December 2019" : "10-16 December 2019"}
        </Box>
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
