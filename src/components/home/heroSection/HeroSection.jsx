import { Link } from "react-router";

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 text-white py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div
          className="max-w-3xl mx-auto text-center py-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="mb-3 text-sm font-medium font-serif uppercase tracking-wider text-gray-800 md:text-base">
            Discover quality education anytime, anywhere
          </p>

          <h1 className=" mb-3 text-2xl font-serif font-bold tracking-tight text-gray-900 md:text-3xl lg:text-5xl">
            Empower Your Future with
          </h1>
          <h1 className="font-serif bg-gradient-to-r from-red-400 via-pink-600 to-purple-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-7xl">
            Online Learning
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/courses/book"
              className="inline-flex min-w-40 items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Book Your Course Now
            </a>
            <Link
              to="tuitions"
              className="inline-flex min-w-40 items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              All Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;