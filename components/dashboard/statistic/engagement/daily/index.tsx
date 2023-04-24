import { Box, Grid, styled, useTheme } from "@mui/material";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DiamondIcon from "@mui/icons-material/Diamond";
import DailyItem from "./item";

export default function DialyReport() {
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
    <Box flexGrow={1} className="h-100 px-4 py-4 flex flex-col mb-4">
      <Grid flexGrow={1} className="h-100" container spacing={2}>
        <Grid item xs={6} className="flex">
          <DailyItem
            icon={<ThumbUpOffAltIcon />}
            label="Like"
            score={34}
            unit="Likes"
          />
        </Grid>
        <Grid item xs={6}>
          <DailyItem
            icon={<ChatBubbleOutlineIcon />}
            label="Comment"
            score={56}
            unit="Comments"
          />
        </Grid>
        <Grid item xs={6}>
          <DailyItem
            icon={<CardGiftcardIcon />}
            label="Point"
            score={450}
            unit="Point"
          />
        </Grid>
        <Grid item xs={6}>
          <DailyItem
            icon={<DiamondIcon />}
            label="Diamond"
            score={40}
            unit="Diamond"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
