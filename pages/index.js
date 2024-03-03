
export default function Home({ data }) {
  return (
    <>
      <h3>{data[0]}</h3>
    </>
  );
}


export async function getStaticProps() {
  const data = ['mohammad hossein'];


  return {
    props: {
      data
    }
  }
}