import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CategoryMenu from "./categoryMenu";
import { useSelector } from "react-redux";
import { SelectedCategoryMenuSelector } from "@/store/slices/dashboardSlice";

const data = [
  {
    name: "10",
    like: 24,
    comment: 48,
  },
  {
    name: "11",
    like: 13,
    comment: 20,
  },
  {
    name: "12",
    like: 80,
    comment: 2,
  },
  {
    name: "13",
    like: 39,
    comment: 68,
  },
  {
    name: "14",
    like: 48,
    comment: 78,
  },
  {
    name: "15",
    like: 38,
    comment: 98,
  },
  {
    name: "16",
    like: 43,
    comment: 8,
  },
];

const Chart = () => {
  const [width, setWidth] = useState(0);
  const selectedCat = useSelector(SelectedCategoryMenuSelector);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <CategoryMenu />
      <LineChart width={width - 48} height={300} data={data} className="mt-5">
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" vertical={true} horizontal={false} />
        <Line
          type="monotone"
          dataKey={selectedCat == 0 || selectedCat == 2 ? "like" : "comment"}
          stroke="#325EFF"
          strokeLinecap="square"
        />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default Chart;
