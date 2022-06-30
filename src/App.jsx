import React, { useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);

  function handleTaskAddition(taskTitle) {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    taskTitle === '' ? {} : setTasks(newTasks);
  }
  function handleTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  }
  function handleTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDelete={handleTaskDelete}
      />
    </div>
  );
}

export default App;
