import { Box, Grid } from "@mui/material";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DiamondIcon from "@mui/icons-material/Diamond";
import DailyItem from "./item";
import Expanded from "@/components/expanded";

export default function DialyReport() {
  return (
    <Expanded className="px-4 py-4 mb-4">
      <Grid flexGrow={1} className="h-full" container spacing={2}>
        <Grid item xs={6}>
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
    </Expanded>
  );
}
