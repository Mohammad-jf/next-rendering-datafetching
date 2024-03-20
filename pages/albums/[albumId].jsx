
const AlbumId = ({ data }) => {
    return (
        <div>
            <h1>{data.id}</h1>
            <h2>{data.title}</h2>
        </div>
    )
}

export default AlbumId





export async function getServerSideProps(context) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`);
    const data = await response.json();

    if (!data.title) {
        return {
            notFound: true,
            // redirect: { destination: '/albums' }
        }
    }

    return {
        props: {
            data
        }
    }

}