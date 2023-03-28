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

export function MoodChart(props) {
  console.log("MoodChart", props.moods);
  const moodTypes = ["Happy", "Angry", "Sad", "Depressed", "Anxious"];
  const moodCounts = {};
  moodTypes.forEach((moodType) => {
    moodCounts[moodType] = 0;
  });

  props.moods.forEach((mood) => {
    if (mood.mood_type in moodCounts) {
      moodCounts[mood.mood_type] += 1;
    }
  });

  const chartData = {
    labels: moodTypes,
    datasets: [
      {
        label: "Mood Types",

        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 2,
        data: [moodCounts],
      },
      {
        label: "Mood Intensity",

        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 2,
        data: [5, 5, 5, 1, 4],
      },
    ],
  };

  const options = {};

  return (
    <div className="App">
      <h1>MoodChart</h1>
      <div>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
