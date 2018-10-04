import React from 'react';
import './ToDoAdd.css';

function ToDoAdd(props) {
  return (
    <div>
      <input className={props.error ? 'error' : ''} onChange={props.updateInput} type="text"/>
      <button onClick={props.handleAdd}>Add to the list</button>
    </div>
  );
}

export default ToDoAdd;
