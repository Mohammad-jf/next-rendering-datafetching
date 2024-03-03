
export default function Home({ data }) {
  return (
    <>
      {<ul>
        {data.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>}
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