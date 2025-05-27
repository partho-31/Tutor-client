const BlogHeroSec = () => {
  return (
    <div
      className="relative inset-0 min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dinzf10l3/image/upload/v1747982011/blog_bg_g5dwlo.jpg')",
      }}
      aria-hidden="true"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Gradient ring behind the title */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500 via-teal-300 to-amber-400 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

        <div
          className="relative z-10 px-4 py-6 sm:py-10 bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-amber-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Knowledge Beyond Classrooms
            </span>
          </h1>

          <p className="italic text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto px-4">
            Tech, Trends & Thought Leadership for Young Minds
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSec;
