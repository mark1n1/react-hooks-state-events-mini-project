import React, { useState } from "react";
import Task from "./Task"

function TaskList({ tasks, selectedCategory }) {
  // const [tasks, setTasks] = useState(tasks);
  const tasksToDisplay = tasks.filter((task) => {
    if(selectedCategory === 'All') return true;

    return task.category === selectedCategory;
  });

  return (
    <div className="tasks">
      { tasks.map((task, index) => (
          <Task key={index} text={task.text} category={task.category} />
      ))}

      {/* { filteredTasks.map((task, index) => (
          <Task key={index} text={task.text} category={task.category} />
      ))} */}
    </div>
  );
}

export default TaskList;
