import React from 'react'

function Todo({ todo, index, delTodo, toggleTodo }) {
  // Priority-based colors
  const priorityColors = {
    high: "red",
    low: "green",
    normal: "green", // fallback if you call it "normal"
  };

  return (
    <div 
      className='todo'
      style={{
        backgroundColor: todo.priority === "high" ? "#ffe5e5" : "#e5ffe5", 
        padding: "8px",
        borderRadius: "6px",
        marginBottom: "8px"
      }}
    >
      <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text} 
        <span 
          style={{ 
            fontSize: "12px", 
            color: priorityColors[todo.priority] || "gray", 
            marginLeft: "8px" 
          }}
        >
          ({todo.priority})
        </span>
      </p>

      <div className='actions'>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleTodo(index)} 
        />
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

export default Todo;
