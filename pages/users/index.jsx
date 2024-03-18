import { useRouter } from 'next/router'
import React from 'react'

const Users = ({ data }) => {
  const router = useRouter();
  return (
    <ul>
      {data.map((user) => <li
        key={user.id}
        onClick={() => router.push(`/users/${user.id}`)}>{user.name}</li>)}
    </ul>
  )
}

export default Users


export async function getStaticProps() {
  console.log('regenerating');
  const res = await fetch('http://localhost:4000/users');
  const data = await res.json();

  return {
    props: {
      data
    },
    revalidate: 10, //second
    // notFound:false,
  }
}