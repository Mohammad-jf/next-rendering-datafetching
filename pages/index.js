
export default function Home({ data }) {
  return (
    <>
      {data.map((item) => <h3 key={item.id}>{item.title}</h3>)}
    </>
  );
}


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}