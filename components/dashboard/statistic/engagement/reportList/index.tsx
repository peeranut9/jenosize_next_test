import React from "react";
import CategoryMenu from "../categoryMenu";
import { useSelector } from "react-redux";
import { SelectedCategoryMenuSelector } from "@/store/slices/dashboardSlice";
import Expanded from "@/components/expanded";
import ReportCard from "./card";

export default function ReportList() {
  const selectedCat = useSelector(SelectedCategoryMenuSelector);
  const dataList: ReportCardModel[] = [
    {
      name: "Ekarach Sripan",
      job: "Creative",
      description: "Early Report",
      score: 43,
    },
    {
      name: "Ekarach Sripan",
      job: "Creative",
      description: "Early Report",
      score: 43,
    },
    {
      name: "Ekarach Sripan",
      job: "Creative",
      description: "Early Report",
      score: 43,
    },
    {
      name: "Ekarach Sripan",
      job: "Creative",
      description: "Early Report",
      score: 43,
    },
    {
      name: "Ekarach Sripan",
      job: "Creative",
      description: "Early Report",
      score: 43,
    },
    {
      name: "Ekarach Sripan",
      job: "Creative",
      description: "Early Report",
      score: 43,
    },
    {
      name: "Ekarach Sripan",
      job: "Creative",
      description: "Early Report",
      score: 43,
    },
  ];
  return (
    <Expanded>
      <CategoryMenu />
      <Expanded className="px-3 overflow-y-scroll h-1 pb-2">
        {dataList.map((e, i) => (
          <ReportCard key={i} index={i + 1} item={e} category={selectedCat} />
        ))}
      </Expanded>
    </Expanded>
  );
}
