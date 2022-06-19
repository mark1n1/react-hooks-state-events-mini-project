import React from "react";

function Task(props) {
  function handleDeleteClick(event) {
    if(event.target.parentNode){
      event.target.parentNode.remove();
    }
  }

  return (
    <div className="task">
      <div className="label">{ props.category }</div>
      <div className="text">{ props.text }</div>
      <button onClick={handleDeleteClick} className="delete">X</button>
    </div>
  );
}

export default Task;
