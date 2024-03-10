
import React from 'react'



const UserId = ({ data }) => {
    return (
        <div>{data.name}</div>
    )
}

export default UserId


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    let paths = data.map((item) => ({ params: { userId: String(item.id) } }))
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}