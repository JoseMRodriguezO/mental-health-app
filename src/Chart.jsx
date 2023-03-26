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
    labels: ["Happy", "sad", "anxious", "angry"],
    datasets: [
      {
        label: "Mood type",
        data: [3, 4, 5, 7, 80, 17, 2, 10, 1],
        backgroundColor: "blue",
        borderColor: "Black",
        borderWidth: 2,
      },
    ],

    datasets: [
      {
        label: "Moods overtime",
        data: [2, 10, 25, 30, 1, 5, 6],
        backgroundColor: "blue",
        borderColor: "Black",
        borderWidth: 3,
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
