import React from "react";
import "./ToDoForm.scss";

const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                placeholder="add new item"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default ToDoForm;