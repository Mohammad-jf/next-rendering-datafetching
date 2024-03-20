import Link from 'next/link'

function Albums({ data }) {
    const newData = data.slice(0, 40)
    return (
        <div>
            <ul>
                {newData.map((album) => <li key={album.id}>
                    <Link href={`/albums/${album.id}`}>
                        {album.title}
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}

export default Albums


export async function getServerSideProps(context) {
    const { req, res, params, query } = context;
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();

    return {
        props: {
            data
        }
    }

}