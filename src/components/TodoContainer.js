import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';  // Updated path
import AddTodoForm from './AddTodoForm';
const sortOrderValue = localStorage.getItem("SORT_ORDER") ?? 'desc'
function TodoContainer() {
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState(sortOrderValue); // Default to ascending order

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
            }
        };


        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
        // const sortedUrl = `${url}?sort[0][field]=Title&sort[0][direction]=${sortOrder}`;
        const sortedUrl = `${url}?view=Grid%20view`;

        try {
            const response = await fetch(sortedUrl, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log('Airtable API Response:', data);

            data.records.sort((objectA, objectB) => {
                const titleA = objectA.fields.title.toUpperCase();
                // console.log(objectA, objectB);
                const titleB = objectB.fields.title.toUpperCase();

                if (titleA < titleB) {
                    return sortOrder === 'asc' ? -1 : 1;
                } else if (titleA > titleB) {
                    return sortOrder === 'asc' ? 1 : -1;
                } else {
                    return 0;
                }
            });

            setTodoList(data.records.map(record => ({
                title: record.fields.title,
                id: record.id
            })));
            setLoading(false);
        } catch (error) {
            console.error('Fetch Error:', error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };
    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    }
    const removeTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
    }
    useEffect(() => {
        localStorage.setItem("SORT_ORDER", sortOrder)

    }, [sortOrder])

    return (

        <div className='main-container'>
            <h1 className='header'>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />

            <button onClick={toggleSortOrder}>Sort by {sortOrder === "asc" ? "descending" : "ascending"}</button>
            {loading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}

        </div>
    );
}

export default TodoContainer;
