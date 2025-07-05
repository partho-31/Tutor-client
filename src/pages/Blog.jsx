import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogHeroSec from "../components/blog/heroSection/BlogHeroSec";
import BlogCard from "../components/blog/card/BlogCard";
import useBlogContext from "../hooks/useBlogsContext";

const BlogLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const { blogs, loading } = useBlogContext();
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const filtered = blogs?.filter((blog) => (
      searchKeyword
        ? blog.heading.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchKeyword.toLowerCase())
        : true
    ))
    setFilteredBlog(filtered)
  }, [blogs,searchKeyword]);

  
  return (
    <div>
      <BlogHeroSec searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <p className="px-6 sm:px-16 mt-5 sm:mt-10 text-2xl font-bold text-gray-600">
        Showing results :
      </p>

      {loading && (
        <div className="w-full flex justify-center h-lvh">
          <span className="loading loading-spinner text-info"></span>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 py-5 sm:py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        {filteredBlog?.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </main>
    </div>
  );
};

export default BlogLayout;
