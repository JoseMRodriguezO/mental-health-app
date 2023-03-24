import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export function MoodChart() {
  const data = {
    labels: ["Mon", "Tues", "Wed"],
    datasets: [
      {
        label: "369",
        data: [3, 6, 9],
        backgroundColor: "aqua",
        borderColor: "Black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};

  return (
    <div className="App">
      <h1>lol</h1>
      <div>
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
}
