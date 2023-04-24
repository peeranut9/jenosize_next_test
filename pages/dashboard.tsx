import Layout from "@/components/layout/dashboard";
import React from "react";
import { useSelector } from "react-redux";
import { SelectedMenuSelector } from "@/store/slices/dashboardSlice";
import Write from "@/components/dashboard/write";
import Approval from "@/components/dashboard/approval";
import Report from "@/components/dashboard/report";
import Statistic from "@/components/dashboard/statistic";
import Setting from "@/components/dashboard/setting";

export default function Dashboard() {
  const selectedMenu = useSelector(SelectedMenuSelector);

  let selectedComponent;
  switch (selectedMenu) {
    case 0:
      selectedComponent = <Write />;
      break;
    case 1:
      selectedComponent = <Approval />;
      break;
    case 2:
      selectedComponent = <Report />;
      break;
    case 3:
      selectedComponent = <Statistic />;
      break;
    case 4:
      selectedComponent = <Setting />;
      break;
    default:
      selectedComponent = <Write />;
  }
  return <Layout>{selectedComponent}</Layout>;
}
