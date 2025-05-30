import { Link } from "react-router";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}/`}>
    <div
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      data-aos="zoom-in-up"
      data-aos-delay={ 100}
    >
      <div className="relative overflow-hidden h-60">
        <img
          src={post.image}
          alt={post.topic}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 glassmorphism opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white px-6 py-2 rounded-full font-medium">
            Read More
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl md:text-2xl font-bold mb-3">
          {post.heading}
        </h3>
        <p className="text-gray-600 mb-4">{post.description.slice(0,200)}</p>
      </div>
    </div></Link>
  );
};

export default BlogCard;
