import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Expanded({ children, className }: Props) {
  return (
    <Box
      flexGrow={1}
      display="flex"
      flexDirection="column"
      sx={{ height: "100%" }}
      className={className}
    >
      {children}
    </Box>
  );
}
