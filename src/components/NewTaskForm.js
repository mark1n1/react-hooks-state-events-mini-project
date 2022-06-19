import React, { useState } from "react";

function NewTaskForm(props) {
  const [taskName, setTaskName] = useState('');
  const [taskCategory, setTaskCategory] = useState('Code');
  const validCategories = props.categories.filter((category) => {
    if(category !== 'All') return true;
    return false;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      text: taskName,
      category: taskCategory
    }

    props.onTaskFormSubmit(formData);

    setTaskName("");
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  function handleCategoryChange(event) {
    setTaskCategory(event.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={ taskName } name="text" onChange={handleTaskNameChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          { validCategories.map((category, index) => (
            <option 
              key={index} 
              value={ category }
            >
              { category }
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
