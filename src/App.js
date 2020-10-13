import React from "react";
import "./App.scss";
import Todo from "./Main/Todo/Todo";
import TodoForm from "./Main/ToDoForm/ToDoForm";
import { Droppable } from 'react-drag-and-drop'


function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onDrop = (data) => {
    console.log(' bye', data)
    // => banana 
  };

  return (
    <div className="app">
    <div className="">
      <h4 className="header">Fincon todo List App </h4>
    </div>
      <div className="todo-list">
      <p className="backlog my-0 h-40">Backlog</p>

        

            <Droppable onDrop={ onDrop} types={['fruit']}>
            {todos.map((todo, index) => (
          
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            )) }
            </Droppable>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;