"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
 const [tasks, setTasks] = useState<
  { text: string; completed: boolean; dueDate: string }[]
>([]);

const [editingIndex, setEditingIndex] = useState<number | null>(null);
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("all");


useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);



const addTask = () => {
  if (task.trim() === "") return;

 if (editingIndex !== null) {
  const updatedTasks = [...tasks];
  updatedTasks[editingIndex] = {
    ...updatedTasks[editingIndex],
    text: task,
    dueDate,
  };
  setTasks(updatedTasks);
  setEditingIndex(null);
} else {

  const newTask = {
  text: task,
  dueDate: dueDate,
  completed: false,
};
  setTasks([
    ...tasks,
    {
      text: task,
      completed: false,
      dueDate,
    },
  ]);
}

setTask("");
setDueDate("");


setDueDate("");

};



const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

const toggleComplete = (index: number) => {
  const updatedTasks = [...tasks];
  updatedTasks[index].completed = !updatedTasks[index].completed;
  setTasks(updatedTasks);
};

const editTask = (index: number) => {
  setTask(tasks[index].text);
  setDueDate(tasks[index].dueDate);
  setEditingIndex(index);
};

const filteredTasks = tasks.filter((task) => {
  if (filter === "active") return !task.completed;
  if (filter === "completed") return task.completed;
  return true;
});


  return (
    <div className="container">
     <h1>🌸 My To-Do List 🌸</h1>


      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
/>

        <button onClick={addTask}>Add Task</button>
      </div>
      <input
  type="text"
  placeholder="🔍 Search tasks..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<div className="filter-buttons">
  <button onClick={() => setFilter("all")}>All</button>
  <button onClick={() => setFilter("active")}>Active</button>
  <button onClick={() => setFilter("completed")}>Completed</button>
</div>

 <ul>
 {
 tasks
  .filter((item) => {
    const matchesSearch = item.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? !item.completed
        : item.completed;

    return matchesSearch && matchesFilter;
  })
  .map((item, index) => (

    <li key={index}>
      <span
        style={{
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.text}
        <br />
        <small>Due: {item.dueDate || "No due date"}</small>

      </span>

      <div>

        <button onClick={() => editTask(index)}>📝</button>


        <button onClick={() => toggleComplete(index)}>✔</button>

        <button onClick={() => deleteTask(index)}>🗑</button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
}
