import React, { useState } from 'react';
import { TodoList } from './TodoList'
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Array<Todo> = [
  { text: "Work", complete: false },
  { text: "Go to gym", complete: false }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, complete: false }])
  }


  return (
    <div className="App">
      <React.Fragment>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </React.Fragment>
    </div>
  );
}

export default App;
