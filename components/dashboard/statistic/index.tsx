import React from "react";
import StatisticHeader from "./header";
import Engagement from "./engagement";
import { useSelector } from "react-redux";
import { SelectedStatisticMenuSelector } from "@/store/slices/dashboardSlice";
import Submission from "./submission";

export default function Statistic() {
  const selectedMenu = useSelector(SelectedStatisticMenuSelector);

  let selectedComponent;
  switch (selectedMenu) {
    case 0:
      selectedComponent = <Submission />;
      break;
    case 1:
      selectedComponent = <Engagement />;
      break;
    default:
      selectedComponent = <Submission />;
  }
  return (
    <>
      <StatisticHeader></StatisticHeader>
      {selectedComponent}
    </>
  );
}
