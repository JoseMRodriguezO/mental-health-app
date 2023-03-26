import React, { useState } from "react";
import Calendar from "react-calendar";

export function TaskManager() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const taskDescription = event.target.elements.taskDescription.value;
    setTasks([...tasks, { date: selectedDate, description: taskDescription }]);
    event.target.elements.taskDescription.value = "";
  };

  const tasksForSelectedDate = tasks.filter((task) => task.date.toDateString() === selectedDate.toDateString());

  return (
    <div>
      <h1>Help plan</h1>
      <div className="row">
        <div className="col-md-6">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        <div className="col-md-6">
          <h2>Tasks for {selectedDate.toDateString()}</h2>
          <ul>
            {tasksForSelectedDate.map((task, index) => (
              <li key={index}>{task.description}</li>
            ))}
          </ul>
          <form onSubmit={handleAddTask}>
            <div className="form-group">
              <input type="text" className="form-control" name="taskDescription" placeholder="Enter task description" />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
