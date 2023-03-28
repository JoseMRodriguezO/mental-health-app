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
  const moodCounts = [0, 0, 0, 0, 0];
  props.moods.forEach((mood) => {
    if (mood.mood_type === "Happy") {
      moodCounts[0] += 1;
    }
    if (mood.mood_type === "Angry") {
      moodCounts[1] += 1;
    }
    if (mood.mood_type === "Sad") {
      moodCounts[2] += 1;
    }
    if (mood.mood_type === "Anxious") {
      moodCounts[3] += 1;
    }
    if (mood.mood_type === "Depressed") {
      moodCounts[4] += 1;
    }
  });
  const chartData = {
    labels: moodTypes,
    datasets: [
      {
        label: "Mood Intensity",

        backgroundColor: "blue",
        borderColor: "black",
        borderWidth: 2,
        data: moodCounts,
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
