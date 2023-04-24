import styled from "@emotion/styled";
import { Button, useTheme } from "@mui/material";
import React from "react";
interface Props {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonRouded(props: Props) {
  const theme = useTheme();
  const StyledButton = styled(Button)(({ active }: { active: string }) => ({
    borderRadius: "9999px",
    color: active == "true" ? "white" : theme.palette.primary.main,
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    textTransform: "none",
  }));

  return (
    <StyledButton
      style={{
        backgroundColor: props.active ? theme.palette.primary.main : "white",
      }}
      active={(props.active || false).toString()}
      onClick={props.onClick}
    >
      {props.icon} <span className="ml-1 text-xs">{props.label}</span>
    </StyledButton>
  );
}
