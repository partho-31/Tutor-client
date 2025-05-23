
const BlogHeroSec = () => {
  return (
    <div
      className="relative py-10 md:py-32 px-4 md:px-8 lg:px-16 text-center overflow-hidden"
      data-aos="fade-down"
    >
      <div
        className="absolute inset-0 bg-cover bg-center  "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dinzf10l3/image/upload/v1747982011/blog_bg_g5dwlo.jpg')",
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10">
        <div className="font-serif italic text-2xl bg-white/0 backdrop-blur-sm text-white font-bold md:text-3xl lg:text-5xl py-2">
          Knowledge Beyond Classrooms
        </div>
        <p className="italic md:text-xl bg-white/0 backdrop-blur-md text-gray-200  max-w-xl mx-auto mt-2">
          Tech, Trends & Thought Leadership for Young Minds
        </p>
      </div>
    </div>
  );
};

export default BlogHeroSec;
