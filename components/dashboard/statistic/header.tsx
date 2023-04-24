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

  const StyledButton = styled(Button)(({ active }: { active: string }) => ({
    textTransform: "none",
    borderRadius: 0,
    color:
      active == "true"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
  }));

  return (
    <Box className="flex shadow-sm h-11">
      <StyledButton
        className="w-full text-center align-middle font-bold"
        active={(selectedMenu == 0).toString()}
        onClick={() => {
          dispatch(selectStatisticMenu(0));
        }}
      >
        Submission
      </StyledButton>
      <Divider orientation="vertical" flexItem className="h-5 self-center" />
      <StyledButton
        className="w-full text-center align-middle font-bold"
        active={(selectedMenu == 1).toString()}
        onClick={() => {
          dispatch(selectStatisticMenu(1));
        }}
      >
        Engagement
      </StyledButton>
    </Box>
  );
}
