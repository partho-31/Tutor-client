import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../components/home/heroSection/HeroSection";
import AboutUs from "../components/home/about/AboutUs";
import useFetchTuitions from "../hooks/useFetchTuitions";
import { Link } from "react-router";
import useFetchTeachers from "../hooks/useFetchTeachers";
import StateContainer from "../components/home/heroSection/StateContainer";
import useFetchBlogs from "../hooks/useFetchBlogs";
import BlogCard from "../components/blog/card/BlogCard";

const Temppo = () => {
  const { tuitions, loading } = useFetchTuitions();
  const { teachers } = useFetchTeachers();
  const {blogs} = useFetchBlogs()

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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 via-pink-600 to-purple-800 bg-clip-text tracking-tight text-transparent md:text-3xl lg:text-4xl"
            data-aos="fade-up"
          >
            Featured Courses
          </h2>
          {loading && (
            <div className="w-full flex justify-center mt-5">
              <span className="loading loading-spinner text-info"></span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tuitions?.results.slice(0, 3).map((tuition, index) => (
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300"
                data-aos="fade-up"
                data-aos-delay="100"
                key={index}
              >
                <img
                  className="h-48 w-full object-cover"
                  src={`https://res.cloudinary.com/dinzf10l3/${tuition.image}`}
                  alt="Mathematics"
                />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {tuition.subjects}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2">
                    {tuition.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{tuition.sub_title}</p>
                  <div className="mt-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/tuitions">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                View All Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Teachers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="m-2 md:m-5 text-center font-serif bg-gradient-to-r from-red-400 via-pink-600 to-purple-800 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-3xl lg:text-4xl uppercase"
            >
              Meet Our Highest Rated Mentors
            </h1>
          </div>
           {loading && (
            <div className="w-full flex justify-center mt-5">
              <span className="loading loading-spinner text-info"></span>
            </div>)}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers?.results.slice(0, 3).map((teacher, index) => (
              <div
                className="bg-gray-50 rounded-lg p-6 text-center teacher-card transition duration-300"
                data-aos="fade-up"
                data-aos-delay="100"
                key={index}
              >
                <div className="overflow-hidden rounded-full w-32 h-32 mx-auto">
                  <img
                    src={teacher.profile.image}
                    alt="Dr. Sarah Johnson"
                    className="w-full h-full object-cover teacher-img transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {teacher.first_name} {teacher.last_name}
                </h3>
                <p className="text-blue-600 mb-2">{teacher.qualifications}</p>
                <p className="text-gray-600 text-sm mb-4">
                  {teacher.experience}
                </p>
                <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition">
                  Book Session
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/teachers">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Meet All Teachers
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section  */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="m-2 md:m-5 text-center font-serif bg-gradient-to-r from-red-400 via-pink-600 to-purple-800 bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl lg:text-4xl uppercase"
            >
            Reed our latest blogs
            </h1>
          </div>
           {loading && (
        <div className="w-full flex justify-center h-lvh">
          <span className="loading loading-spinner text-info"></span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
          <div className="text-center mt-5" data-aos="fade-up">
            <Link to="/blog">
              <button className="bg-blue-400 text-white px-10 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                View all
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StateContainer tuitions={tuitions}/>

      {/* Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center text-gray-800 mb-12"
            data-aos="fade-up"
          >
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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
            <div
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
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
            <div
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay="300"
            >
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
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are achieving their academic goals
            with our expert tutors.
          </p>
          <Link to="/registration">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Temppo;
