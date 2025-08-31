import { useState } from 'react';
import './App.css';
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";

function App() {

  const [inputVal, setInputVal] = useState('')

  const [todos, setTodos] = useState([])

  function writeTodo(e){
    setInputVal(e.target.value)
  }

  function addTodo(priority) {
  if (inputVal !== '') {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: inputVal, priority: priority, completed: false } 
    ]);
    setInputVal('');
  }
}
function toggleTodo(index) {
  setTodos((prevTodos) =>
    prevTodos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    )
  );
}

  function delTodo(todoIndex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos , prevTodosIndex)=>{
      return prevTodosIndex!= todoIndex
    })
  )
  }
console.log(todos)
  return (
   <main>
    <h1> TO DO list</h1>
    <InputContainer inputVal={inputVal} writeTodo={writeTodo} addTodo={addTodo}/>
   <TodoContainer todos={todos} delTodo={delTodo} toggleTodo={toggleTodo} />

   </main>
  );

}

export default App;