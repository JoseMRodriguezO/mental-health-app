import React from "react";
import { useLocation } from "react-router-dom";
import { MoodChart } from "./Chart";
import { Calendar } from "react-calendar";
export function Home() {
  const location = useLocation();
  return (
    <div className="container">
      <header>
        <h1>TalkSafe</h1>
      </header>
      <main>
        <p>Here is some content for my home page.</p>
        <button>Click me!</button>
      </main>
      <MoodChart />
      <Calendar />
      <footer>
        <p>Copyright © 2023</p>
      </footer>
    </div>
  );
}
