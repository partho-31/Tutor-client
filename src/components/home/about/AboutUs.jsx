import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="py-0 bg-white mt-10 ">
      <div className=" mx-auto px-6 sm:px-14">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
          <div className="md:w-1/2 sm:mb-10 mt-5 sm:mt-12" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-3 sm:mb-6">
              About EduPoint
            </h2>
            <p className="text-sm sm:text-[17px] text-gray-600 sm:mb-5 mb-3">
              EduPoint is a modern tuition marketplace connecting students with
              experienced, highly qualified tutors across various subjects and
              levels. Whether you're a school student needing help in Math or a
              college aspirant preparing for competitive exams, we bring the
              right teacher to your doorstep — online or offline.
            </p>
            <p className="text-sm sm:text-[17px] text-gray-600 sm:mb-5 mb-4">
              At EduPoint, we believe that every student deserves access to
              quality education, tailored learning and expert guidance. Our
              mission is to bridge the gap between students and top-tier
              teachers through a reliable and easy-to-use platform.Enroll online
              effortlessly and get matched with the right tutor.Start building
              your academic success from the very next day.
            </p>
            <Link to="about-us">
              <button className="bg-blue-600 text-white sm:px-6 px-4 sm:py-2 py-1 rounded-md hover:bg-blue-700 transition">
                Learn More
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-end" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/dinzf10l3/image/upload/v1747370698/about_rpvc0g.avif"
              alt="Students learning together"
              className="rounded-lg shadow-xl w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
