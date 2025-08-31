import React from 'react'
import Todo from './Todo';

function TodoContainer({ todos, delTodo, toggleTodo }) {   
  return (
   <div className='container'>
      {todos.map((todo, index) => (
        <Todo 
          key={index} 
          todo={todo} 
          index={index} 
          delTodo={delTodo} 
          toggleTodo={toggleTodo} 
        />
      ))}
    </div>
  );
}

export default TodoContainer;

