import { Box, Divider } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DiamondIcon from "@mui/icons-material/Diamond";

interface Props {
  index: number;
  item: ReportCardModel;
  category: number;
}

export default function ReportCard({ index, item, category }: Props) {
  let icon = null;
  let lable = null;
  switch (category) {
    case 0:
      icon = <ThumbUpAltIcon color="primary" />;
      lable = "People Likes";
      break;
    case 1:
      icon = <ChatBubbleOutlineIcon color="primary" />;
      lable = "Comments";
      break;
    case 2:
      icon = <CardGiftcardIcon color="primary" />;
      lable = "Point";
      break;
    case 3:
      icon = <DiamondIcon color="primary" />;
      lable = "Diamond";
      break;
  }

  return (
    <Box className="flex mt-2">
      <Box className="rounded-full bg-black text-white w-6 h-6 flex justify-center items-center text-sm self-center p-3">
        {index}
      </Box>
      <Box
        flexGrow={1}
        className="flex w-full self-center ml-2 border rounded-md shadow-sm py-2"
      >
        <Box className="rounded-full bg-gray-400 text-white w-6 h-6 flex justify-center items-center text-sm self-center p-4 ml-1 sm:ml-3">
          <PersonIcon sx={{ color: "white" }} />
        </Box>
        <Box className="ml-2">
          <Box className="text-sm">
            <span className="font-bold">{item.name}. </span>
            <span>{item.job}</span>
          </Box>
          <Box className="flex mt-1">
            <StickyNote2Icon sx={{ fontSize: "1rem" }} />
            <Box className="text-xs">{item.description}</Box>
          </Box>
        </Box>
        <Box className="ml-auto">
          <Divider
            orientation="vertical"
            flexItem
            className="h-full self-center"
          />
        </Box>
        <Box className="flex self-center px-1 sm:px-3">
          {icon}
          <Box className="ml-2 text-xs self-center">
            {item.score} {lable}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
