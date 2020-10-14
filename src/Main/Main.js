import React from "react";
import "./Main.scss";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Todo from "./Todo/Todo";
import ToDoForm from "./ToDoForm/ToDoForm";
import {todoData} from './Data/Data';

function Main() {
    const [todos, setTodos] = React.useState(todoData);
  
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
  
    const onDragEnd = (result) => {
      const { destination, source, reason } = result
      if (!destination || reason === 'CANCEL') {
        return;
      }
  
      if (destination.index === source.index && destination.droppableId === source.droppableId) {
        return;
      }
  
      const newTodos = Object.assign([], todos);
      const droppedToDo = todos[source.index];
  
      newTodos.splice(source.index, 1);
      newTodos.splice(destination.index, 0, droppedToDo);
  
      setTodos(newTodos);
    }
  
    return (
      <DragDropContext onDragEnd={onDragEnd.bind(this)}>
        <div className="app">
          <div className="">
            <h4 className="header">My todo List App </h4>
          </div>
          <div className="todo-list">
            <p className="backlog my-0 h-40">Backlog</p>
            <Droppable droppableId="dp1">
              {
                (provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {todos.map((todo, index) => (
  
                      <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                      />
                    ))}
                    {provided.placeholder}
  
                    <ToDoForm addTodo={addTodo} />
                  </div>
                )
              }
            </Droppable>
  
          </div>
        </div>
      </DragDropContext>
    );
  }
  
  export default Main;