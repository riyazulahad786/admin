import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const LineChart = () => {
  // Chart.js Data and Options
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"], // x-axis labels
    datasets: [
      {
        label: "Company Growth",
        data: [10, 30, 50, 60, 90, 120], // y-axis values
        fill: false,
        borderColor: "#199FB1", // Line color
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow border-2 border-[#199FB1]">
      <div className="text-xl font-semibold mb-4">Company Growth</div>
      {/* Render the chart here */}
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
