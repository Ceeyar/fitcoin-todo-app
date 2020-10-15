import React from 'react';
import "./Colomn.scss";
import Todo from '../Todo/Todo';
import ToDoForm from '../ToDoForm/ToDoForm';
import { Droppable } from 'react-beautiful-dnd';

const Colomn = ({type, todos, completeTodo, startTodo, undoToDo, removeTodo, addTodo, droppableId}) => {

    return (
        <div className="todo-list mx-8">
            <div className={type.toLowerCase()+"-header"}></div>
            <p className="backlog my-0 h-40">{type}</p>
            <Droppable droppableId={droppableId}>
              {
                (provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {todos.map((todo, index) => (
  
                      <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        undoToDo={undoToDo ? undoToDo :null}
                        removeTodo={removeTodo}
                      />
                    ))}
                    {provided.placeholder}
  
                    {type === "Backlog" && <ToDoForm addTodo={addTodo} />}
                  </div>
                )
              }
            </Droppable>
  
          </div>
    )
};

export default Colomn;