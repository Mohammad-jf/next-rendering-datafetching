import { useRouter } from 'next/router'
import React from 'react'



const UserId = ({ data }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <h2>FallBack page...</h2>
    }
    return (
        <div>{data.name}</div>
    )
}

export default UserId


// getting address for each page and pages length
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const userData = data.slice(0, 4)

    let paths = userData.map((item) => ({ params: { userId: String(item.id) } }))
    return {
        paths,
        fallback: true
    }
}




// get data for each page
export async function getStaticProps(context) {

    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const data = await res.json();

    // handler if data doesnt exist
    if (!data.name) {
        // next undrestand and it will redirect to 404
        return {
            notFound: true
        }

    }

    return {
        props: {
            data
        }
    }
}