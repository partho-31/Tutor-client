import { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";
import { useParams } from "react-router";

const BlogPost = () => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const { Id } = useParams();

  useEffect(() => {
    const FetchPost = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get(`api/blogs/${Id}/`);
        setPost(res.data);
      } catch (error) {
        console.log("Error while fetching post", error);
      } finally {
        setLoading(false);
      }
    };
    FetchPost();
  }, [Id]);

  return (
    <div>
      {loading ? (
        <div className="w-full flex justify-center items-center h-screen">
          <span className="loading loading-spinner text-info text-6xl"></span>
        </div>
      ) : (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-32 max-w-5xl mx-auto py-8 text-gray-800 font-sans">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.heading}
            </h1>
          </header>

          {post.image && (
            <img
              src={post.image}
              alt="Abstract AI concept"
              className="w-full max-h-[28rem] object-cover rounded-lg shadow-md mb-6"
            />
          )}

          <div className="text-base sm:text-lg leading-relaxed mb-10">
            <p className="mb-4">{post.description?.slice(0, 500)}</p>
            <p className="mb-4">{post.description?.slice(500)}</p>
          </div>

          <footer className="border-t pt-4 text-sm text-gray-500 italic flex flex-col sm:flex-row justify-between gap-2">
            <span>
              by {post?.author?.first_name} {post?.author?.last_name}
            </span>
            <span>Published on {new Date(post.created_at).toLocaleDateString()}</span>
          </footer>
        </div>
      )}
    </div>
  );
};

export default BlogPost;   
