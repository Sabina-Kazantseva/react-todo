import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types'; // Import PropTypes



function TodoList({ todoList, onRemoveTodo }) {
    console.log("TodoList - todoList:", todoList);

    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} task={todo} onRemoveTodo={onRemoveTodo} />
            ))}
        </ul>
    );
}
// Define propTypes for TodoList
TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;
