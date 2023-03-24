import {
  Chart as ChartJS,
  LineElement,
  LineController,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import React from "react";
ChartJS.register(LineElement, LineController, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export function MoodChart() {
  const data = {
    labels: ["Mon", "Tues", "Wed"],
    datasets: [
      {
        label: "34579",
        data: [3, 4, 5, 7, 10, 17, 2, 10, 20],
        backgroundColor: "blue",
        borderColor: "Black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className="App">
      <h1>MoodChart</h1>
      <div>
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}
