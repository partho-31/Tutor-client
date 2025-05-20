import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              About HomeTutor
            </h2>
            <p className="text-gray-600 mb-4">
              HomeTutor is a modern tuition marketplace connecting students with
              experienced, highly qualified tutors across various subjects and
              levels. Whether you're a school student needing help in Math or a
              college aspirant preparing for competitive exams, we bring the
              right teacher to your doorstep — online or offline.
            </p>
            <p className="text-gray-600 mb-6">
              At HomeTutor, we believe that every student deserves access to
              quality education, tailored learning, and expert guidance. Our
              mission is to bridge the gap between students and top-tier
              teachers through a reliable and easy-to-use platform.
            </p>
            <Link to="about-us">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Learn More
              </button>
            </Link>
          </div>
          <div
            className="md:w-1/2 flex justify-center gap-5"
            data-aos="fade-left"
          >
            <img
              src="https://res.cloudinary.com/dinzf10l3/image/upload/v1747370698/about_rpvc0g.avif"
              alt="Students learning together"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
