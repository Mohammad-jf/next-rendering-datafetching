import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const Todos = () => {
    const getData = async (url) => {
        const res = await fetch(url);
        const data = res.json();
        return data
    }

    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', getData);


    if (error) return <h1>Failed To Load</h1>
    if (isLoading) return <h1>is Loading</h1>
    return (
        <div>
            <ul>
                {data.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ul>
        </div>
    )
}

export default Todos