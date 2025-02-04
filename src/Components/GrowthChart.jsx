import  { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const dataSets = {
  month: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [10, 20, 15, 30]
  },
  year: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [5, 15, 20, 25, 35, 40, 45, 50, 55, 60, 70, 80]
  },
  oneYear: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    data: [50, 100, 150, 200]
  },
  twoYear: {
    labels: ["2023", "2024"],
    data: [500, 800]
  }
};

const GrowthChart = () => {
  const [selectedData, setSelectedData] = useState("month");

  const chartData = {
    labels: dataSets[selectedData].labels,
    datasets: [
      {
        label: "Growth",
        data: dataSets[selectedData].data,
        borderColor: "#199FB1",
        backgroundColor: "rgba(25, 159, 177, 0.2)",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="hidden lg:block w-full lg:w-1/2 p-4 bg-gray-100 rounded-lg shadow flex flex-col justify-between">
      <div className="text-xl font-semibold mb-4">Company Growth</div>
      <div className="flex-1">
        <Line data={chartData} />
      </div>
      <div className="flex justify-around items-center mt-4 space-x-2">
        <button onClick={() => setSelectedData("month")} className={`py-1 px-4 ${selectedData === "month" ? "bg-[#199FB1] text-white" : "bg-white text-black border-2 border-[#199FB1]"} rounded-md`}>Month</button>
        <button onClick={() => setSelectedData("year")} className={`py-1 px-4 ${selectedData === "year" ? "bg-[#199FB1] text-white" : "bg-white text-black border-2 border-[#199FB1]"} rounded-md`}>Year</button>
        <button onClick={() => setSelectedData("oneYear")} className={`py-1 px-4 ${selectedData === "oneYear" ? "bg-[#199FB1] text-white" : "bg-white text-black border-2 border-[#199FB1]"} rounded-md`}>1 Year</button>
        <button onClick={() => setSelectedData("twoYear")} className={`py-1 px-4 ${selectedData === "twoYear" ? "bg-[#199FB1] text-white" : "bg-white text-black border-2 border-[#199FB1]"} rounded-md`}>2 Year</button>
      </div>
    </div>
  );
};

export default GrowthChart;
