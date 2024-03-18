import React from 'react'

function Albums({ data }) {
    const newData = data.slice(0, 40)
    return (
        <div>
            <ul>
                {newData.map((album) => <li key={album.id}>{album.title}</li>)}
            </ul>
        </div>
    )
}

export default Albums


export async function getServerSideProps(context) {
    const { req, res, params } = context;
    console.log(req)
    const response = await fetch('http://localhost:4000/albums');
    const data = await response.json();

    return {
        props: {
            data
        }
    }

}