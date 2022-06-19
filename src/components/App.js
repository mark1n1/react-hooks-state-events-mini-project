import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentTasks, setCurrentTasks] = useState(TASKS);
  // const [taskName, setTaskName] = useState('');
  // const [taskCategory, setTaskCategory] = useState('Code');

  function handleTaskSubmit(newTask) {
    const newTasks = [...TASKS, newTask]
    setCurrentTasks(newTasks);
  }

  function handleSelectedCategory(event) {
    setSelectedCategory(event.target.value);
    
    event.currentTarget.classList.toggle('selected');
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        handleSelectedCategory={handleSelectedCategory}
      />
      <NewTaskForm 
        onTaskFormSubmit={handleTaskSubmit} 
        categories={CATEGORIES}
      />
      <TaskList 
        tasks={currentTasks} 
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
