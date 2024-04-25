import React, { useEffect, useState } from 'react';

const Todo = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(todo => {
                setTodos(todo);
                // console.log(todo);
            })
    }, []);


    return (
        <div>

            {todos.map((todo) => (
                <div key={todo.id}>
                    <h1>UserID: {todo.userId}</h1>
                    <h2>{todo.title}</h2>
                </div>
            ))}

        </div>
    );
};

export default Todo;