import React, { useState } from 'react';

function InputContainer({ inputVal, writeTodo, addTodo }) {
  const [priority, setPriority] = useState("normal"); // default priority

  return (
    <div className='input_container'>
      <input 
        type="text" 
        placeholder='Enter a task' 
        value={inputVal} 
        onChange={writeTodo} 
      />

      {/* Dropdown for priority */}
         <div style={{ marginTop: "10px" }}>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="normal">Usual Task</option>
          <option value="high">High Priority</option>
        </select>
      </div>

      {/* Pass selected priority when adding task */}
      <button onClick={() => addTodo(priority)}>+</button>
    </div>
  );
}

export default InputContainer;

