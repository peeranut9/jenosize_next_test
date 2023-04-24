import {
  SelectedStatisticMenuSelector,
  selectStatisticMenu,
} from "@/store/slices/dashboardSlice";
import { Box, Button, Divider, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { useAppDispatch } from "@/store/store";

export default function StatisticHeader() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const selectedMenu = useSelector(SelectedStatisticMenuSelector);

  const StyledButton = styled(Button)(({ active }: { active: boolean }) => ({
    textTransform: "none",
    borderRadius: 0,
    color: active ? theme.palette.primary.main : theme.palette.secondary.main,
  }));

  return (
    <Box className="flex shadow-sm">
      <StyledButton
        className="w-full text-center h-11 align-middle font-bold"
        active={selectedMenu == 0}
        onClick={() => {
          dispatch(selectStatisticMenu(0));
        }}
      >
        Submission
      </StyledButton>
      <Divider orientation="vertical" flexItem className="h-5 self-center" />
      <StyledButton
        className="w-full text-center h-11 align-middle font-bold"
        active={selectedMenu == 1}
        onClick={() => {
          dispatch(selectStatisticMenu(1));
        }}
      >
        Engagement
      </StyledButton>
    </Box>
  );
}
