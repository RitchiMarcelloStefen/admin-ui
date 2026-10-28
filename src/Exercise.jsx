import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (fetchError) {
        setError(fetchError.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-700">
        Post Cards
      </h1>
      {error ? (
        <p className="text-center text-red-600" role="alert">
          Gagal memuat post: {error}
        </p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-600" role="status">
          Memuat post...
        </p>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 9).map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Exercise;
