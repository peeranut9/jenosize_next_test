import { Box } from "@mui/material";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DiamondIcon from "@mui/icons-material/Diamond";
import ButtonRouded from "./buttonRouded";
import { useSelector } from "react-redux";
import {
  SelectedCategoryMenuSelector,
  selectCategoryMenu,
} from "@/store/slices/dashboardSlice";
import { useAppDispatch } from "@/store/store";

export default function CategoryMenu() {
  const dispatch = useAppDispatch();
  const selectedCat = useSelector(SelectedCategoryMenuSelector);
  return (
    <Box className="h-full px-6 py-4">
      <Box className="flex justify-between">
        <ButtonRouded
          label="Like"
          icon={<ThumbUpOffAltIcon />}
          active={selectedCat == 0}
          onClick={() => {
            dispatch(selectCategoryMenu(0));
          }}
        />
        <ButtonRouded
          label="Comment"
          icon={<ChatBubbleOutlineIcon />}
          active={selectedCat == 1}
          onClick={() => {
            dispatch(selectCategoryMenu(1));
          }}
        />
        <ButtonRouded
          label="Point"
          icon={<CardGiftcardIcon />}
          active={selectedCat == 2}
          onClick={() => {
            dispatch(selectCategoryMenu(2));
          }}
        />
        <ButtonRouded
          label="Diamond"
          icon={<DiamondIcon />}
          active={selectedCat == 3}
          onClick={() => {
            dispatch(selectCategoryMenu(3));
          }}
        />
      </Box>
    </Box>
  );
}
