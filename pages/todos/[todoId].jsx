import React, { useState } from 'react'





const TodoDetails = ({ todo }) => {
    const [data, setData] = useState(todo);

    const updateHandler = async (todoId) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        const data = await res.json();
        setData(data)
        console.log(data)
    }

    return (
        <div>
            <h1>{data.title}</h1>
            <h2>{`${data.completed}`}</h2>
            <h3>{`${data.id}`}</h3>
            <button onClick={() => updateHandler(data.id)}>Update</button>
        </div>
    )
}

export default TodoDetails


export async function getServerSideProps(context) {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
    const data = await res.json();

    return {
        props: {
            todo: data
        }
    }
}