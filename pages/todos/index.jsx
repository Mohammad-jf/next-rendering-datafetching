import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState(null || []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))

    }, [])
    return (
        <div>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    )
}

export default Todos