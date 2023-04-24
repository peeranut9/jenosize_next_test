import styled from "@emotion/styled";
import { Box, useTheme } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  icon: React.ReactNode;
  score: number;
  unit: string;
}

export default function DailyItem(props: Props) {
  const theme = useTheme();
  const StyledBox = styled(Box)({
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    border: "solid 2px",
    width: "100%",
    height: "100%",
    borderColor: "#f1f1f1",
    borderRadius: 10,
  });
  return (
    <StyledBox>
      <Box className="text-sm" color={theme.palette.primary.main}>
        {props.icon} {props.label}
      </Box>
      <Box className="text-4xl text-center">
        {props.score}
        <Box className="text-xs" color={theme.palette.secondary.main}>
          {props.unit}
        </Box>
      </Box>
      <Box></Box>
    </StyledBox>
  );
}
