import React from "react";
const todoList = [
    { id: 1, title: "complete assigment" },
    { id: 2, title: "go for a walk" },
    { id: 3, title: "go shopping" },
]
function TodoList() {
    return (
        <ul>
            {todoList.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );

}
export default TodoList;
