import { Link } from "react-router";

function HeroSection() {
  return (
    <section className="relative min-h-[80lvh] flex flex-col-reverse  lg:flex-row items-center justify-between px-6 md:px-12 lg:px-14 bg-white">
      {/* Left Content */}
      <div
        className="w-full  lg:w-1/2 text-center lg:text-left"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-2xl text-left sm:text-3xl bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent md:text-4xl lg:text-5xl font-bold t font-serif leading-tight">
          Book a home tutor today.Start learning from tomorrow.
        </h1>

        <p className="text-sm text-start sm:text-lg mt-2 text-gray-500 font-semibold">
          Connect with verified tutors near you in just a few clicks.
          Personalized offline learning begins right after enrollment.Bringing
          the Classroom to Your Living Room!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 sm:px-6 py-2 sm:py-3 text-base font-medium text-white shadow hover:bg-gray-800 transition duration-200"
          >
            Book Your Course Now
          </Link>
          <Link
            to="/courses"
            className="hidden sm:inline-flex items-center justify-center rounded-md  bg-gray-300 px-6 py-3 text-base font-medium text-gray-800 shadow hover:bg-gray-400 transition duration-200"
          >
            All Courses
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="w-full lg:w-1/2 flex justify-center lg:-mr-16 items-center mb-10 lg:mb-0"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src="https://res.cloudinary.com/dinzf10l3/image/upload/v1751711137/Teaching-cuate__1_-removebg-preview_lrazs8.png"
          alt="Tutoring Illustration"
          className="w-full max-w-[400px] h-auto"
        />
      </div>
    </section>
  );
}

export default HeroSection;
