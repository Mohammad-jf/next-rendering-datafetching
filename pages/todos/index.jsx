import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const Todos = () => {
    const [todos, setTodos] = useState(null || []);

    const getData = async (url) => {
        const res = await fetch(url);
        const data = res.json();
        return data
    }

    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', getData);

    useEffect(() => {
        if (data) {
            setTodos(data)
        } else {
            setTodos([])
        }
    }, [data]);


    if (error) return <h1>Failed to load</h1>
    if (isLoading) return <h1>is Loading</h1>
    return (
        <div>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    )
}

export default Todos