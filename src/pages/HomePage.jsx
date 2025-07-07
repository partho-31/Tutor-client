import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/home/heroSection/HeroSection";
import AboutUs from "../components/home/about/AboutUs";
import { Link } from "react-router";
import StateContainer from "../components/home/heroSection/StateContainer";
import BlogCard from "../components/blog/card/BlogCard";
import { FaChalkboardTeacher, FaMapMarkerAlt } from "react-icons/fa";
import useTuitionContext from "../hooks/useTuitionContext";
import useTeacherContext from "../hooks/useTeacherContext"
import useBlogContext from "../hooks/useBlogsContext";

const HomePage = () => {
  const { tuitions, loading } = useTuitionContext();
  const { teachers } = useTeacherContext()
  const { blogs } = useBlogContext()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  
  return (
    <div className="font-sans ">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUs />

      {/* Featured Courses Section */}
      <section
        data-aos="fade-up"
        data-aos-delay="100"
        className="mt-10 sm:mt-15"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold text-center mb-5 sm:mb-10  bg-pink-500  bg-clip-text tracking-tight text-transparent md:text-2xl lg:text-3xl">
            Featured Courses
          </h2>
          {loading && (
            <div className="w-full flex justify-center mt-5">
              <span className="loading loading-spinner text-info"></span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {tuitions?.results.slice(0, 4).map((tuition, index) => (
              <div
                className="bg-white hover:border hover:border-blue-400 rounded-xl overflow-hidden "
                key={index}
              >
                <img
                  className="h-48 w-full object-cover"
                  src={`https://res.cloudinary.com/dinzf10l3/${tuition.image}`}
                  alt="Mathematics"
                />
                <div className="p-6">
                  <div className="flex items-center text-xs sm:text-sm font-semibold text-blue-600 mb-2">
                    <span className="">
                      {tuition.subjects} - {tuition.classes}
                    </span>
                  </div>
                  <h3 className="text-xl mt-1 font-semibold text-gray-800 overflow-hidden line-clamp-2">
                    {tuition.title}
                  </h3>
                  <p className="mt-1 text-gray-600 overflow-hidden line-clamp-4">
                    {tuition.sub_title}
                  </p>
                  <div className="mt-2">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 sm:mt-10">
            <Link to="/courses">
              <button className="bg-blue-600 text-white px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                View All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Teachers Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div>
            <h1 className=" text-center font-serif bg-gradient-to-r from-red-400 via-pink-600 to-purple-800 bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-2xl lg:text-3xl uppercase">
              Meet Our Highest Rated Mentors
            </h1>
          </div>
          {loading && (
            <div className="w-full flex justify-center mt-5">
              <span className="loading loading-spinner text-info"></span>
            </div>
          )}
          <div className="mt-5 sm:mt-10 grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-4 gap-4">
            {teachers?.results.slice(0, 4).map((teacher) => (
              <Link to={`/teachers/${teacher.id}/`}>
                <div
                  className="bg-white rounded-xl hover:border hover:border-blue-400 shadow-md p-4 text-center transition duration-300 hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  key={teacher.id}
                >
                  {/* Profile Image */}
                  <div className="overflow-hidden rounded-full w-32 h-32 mx-auto ring-2 ring-blue-200 transition-transform duration-300 hover:scale-105">
                    <img
                      src={teacher.profile.image}
                      alt={`${teacher.first_name} ${teacher.last_name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-gray-800 mt-5">
                    {teacher.first_name} {teacher.last_name}
                  </h3>

                  {/* Profession */}
                  <div className="flex items-center justify-center gap-2 font-bold text-blue-600 text-md mb-1">
                    <FaChalkboardTeacher className="text-blue-500" />
                    <p>{teacher.profession}</p>
                  </div>

                  {/* Institute */}
                  <p className="text-md text-gray-800 overflow-hidden line-clamp-1 mb-1">
                    {teacher.institute}
                  </p>

                  {/* Address */}
                  <div className="flex items-center overflow-hidden line-clamp-1  justify-center gap-1 text-gray-500 text-sm mb-4">
                    <FaMapMarkerAlt />
                    <p>{teacher.address}</p>
                  </div>

                  {/* CTA Button */}
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300">
                    Book Session
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/teachers">
              <button className="bg-blue-600 text-white px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Meet All Teachers
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section  */}
      <section className=" bg-white">
        <div className="container mx-auto px-6">
          <div>
            <h1 className="text-center font-serif bg-pink-500 bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-2xl lg:text-3xl uppercase">
              Read our latest blogs
            </h1>
          </div>
          {loading && (
            <div className="w-full flex justify-center h-lvh">
              <span className="loading loading-spinner text-info"></span>
            </div>
          )}

          <div className=" mx-auto py-5 sm:py-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            {blogs?.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
          <div className="text-center ">
            <Link to="/blog">
              <button className="bg-blue-600 text-white px-10 py-2 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                View all
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StateContainer tuitions={tuitions} />
      

      {/* Review Section */}
      <section className=" bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="mt-10 sm:mt-10 text-2xl sm:text-3xl font-bold text-center text-gray-700 ">
            What Our Students Say
          </h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Emma S."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Emma S.</h4>
                </div>
              </div>
              <p className="text-gray-600">
                "The calculus tutor helped me go from failing to an A in just 2
                months. The personalized approach made all the difference!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="David L."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">David L.</h4>
                </div>
              </div>
              <p className="text-gray-600">
                "My Spanish improved dramatically after just 10 sessions. The
                tutors are patient and make learning enjoyable."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Sophia K."
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sophia K.</h4>
                </div>
              </div>
              <p className="text-gray-600">
                "The physics tutoring helped me understand concepts I'd
                struggled with for years. Worth every penny!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="mt-10 p-6 bg-blue-600 text-white">
        <div className="container  space-y-3 mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold sm:mb-6">
            Ready to Start Learning?
          </h2>
          <p className="sm:text-xl sm:mb-8 max-w-2xl mx-auto">
            Join thousands of students who are achieving their academic goals
            with our expert tutors.
          </p>
          <Link to="/registration">
            <button className="bg-white text-blue-700 px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
