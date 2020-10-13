import React from "react";
import "./Todo.scss";
import { BsFillTrashFill, BsCheck,BsArrowBarLeft } from 'react-icons/bs';
import { Draggable } from "react-drag-and-drop";


const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <Draggable type="fruit" data={todo} >
        <div
            className="todo"
            style={{ backgroundColor: todo.isCompleted ? "#4BB543" : "", color: todo.isCompleted ? "#fff" : "" }}>
            {todo.text}
            <div className="action-parent">
                {todo.isCompleted ? <BsArrowBarLeft className="mx-8 undo" onClick={() => completeTodo(index)} />
                : <BsCheck className="mx-8 action" onClick={() => completeTodo(index)} />}
                <BsFillTrashFill className="delete" onClick={() => removeTodo(index)} />
            </div>
        </div>
        </Draggable>
    );
};

export default Todo;