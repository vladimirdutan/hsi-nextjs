"use client";
import React, { useState } from "react";

interface ToDoItem {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<ToDoItem[]>([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (!taskText) return;
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    setTaskText("");
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To-Do Listtttt</h1>
      <input
        type="text"
        value={taskText}
        className="text-black bg-red-100"
        style={{
          color: "black bg-white",
        }}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <span
              className="text-black"
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
