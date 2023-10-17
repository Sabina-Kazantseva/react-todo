// import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    { id: 1, title: "complete assigment" },
    { id: 2, title: "go for a walk" },
    { id: 3, title: "go shopping" },
]

// const qweqwe = { test: "123", test1: 1232 }

function TodoList() {
    return (
        <ul>
            {todoList.map((task) => (
                <TodoListItem key={task.id} task={task} todo={todoList} />
            ))}
        </ul>
    );
}

export default TodoList;
