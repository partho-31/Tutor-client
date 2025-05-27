import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogHeroSec from "../components/blog/heroSection/BlogHeroSec";
import BlogFilter from "../components/blog/filter/BlogFilter";
import BlogCard from "../components/blog/card/BlogCard";
import { Link } from "react-router";
import useFetchBlogs from "../hooks/useFetchBlogs";

const BlogLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const {blogs,loading} = useFetchBlogs()

  return (
    <div>
      <BlogHeroSec />
      <BlogFilter />
      <Link to="addBlog"><div className="text-center rounded-full mt-10 mx-5 p-3 text-white bg-indigo-900">
        <span className="font-medium">Add Blog</span>
      </div></Link>

      {loading && (
        <div className="w-full flex justify-center h-lvh">
          <span className="loading loading-spinner text-info"></span>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </main>
    </div>
  );
};

export default BlogLayout;
