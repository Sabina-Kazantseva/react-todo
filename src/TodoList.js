import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList({ todoList, onRemoveTodo }) {
    console.log("TodoList - todoList:", todoList);

    return (
        <ul>
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} task={todo} onRemoveTodo={onRemoveTodo} />
            ))}
        </ul>
    );
}
export default TodoList;
