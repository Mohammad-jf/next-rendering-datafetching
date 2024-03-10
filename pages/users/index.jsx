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
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}