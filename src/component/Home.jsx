import { Link } from 'react-router-dom'
import { useGetArticleQuery } from "../apiSlice";
import ImageCard from "./imageCard";
function Home() {
    const { data, isLoading, error } = useGetArticleQuery();

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error</div>;
    }
  return (
    <>
    <h1 className="text-2xl font-bold p-2 text-center">Drupal Articles</h1>
    <div className="flex justify-center">
      <button className="bg-gray-500 text-white px-4 py-2 rounded-xl mr-[100px]">
        <Link to="/create">Create / Update </Link>
      </button>
    </div>
    <section className="parent-section">
      {data?.map((data) => {
        console.log('adta', data)
        return (
          <ImageCard
            key={data.id}
            title={data.title}
            body={data.body}
            tag={data.tags}
            img={data.image}
            time={data.created_date}
            author={data?.author?.username}
          />
        );
      })}
    </section>
  </>
  )
}

export default Home
