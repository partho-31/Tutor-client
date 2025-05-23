import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HiUserGroup,
  HiBookOpen,
  HiClipboardList,
  HiDesktopComputer,
} from "react-icons/hi";
import { Link } from "react-router";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const offerings = [
    {
      title: "Verified Tutors",
      description:
        "Strict verification process to ensure quality and expertise.",
      icon: <HiUserGroup className="text-purple-600 text-4xl" />,
    },
    {
      title: "Flexible Learning",
      description: "One-on-one, online, or group classes.",
      icon: <HiBookOpen className="text-purple-600 text-4xl" />,
    },
    {
      title: "Customized Plans",
      description: "Tailored study plans to your pace and goals.",
      icon: <HiClipboardList className="text-purple-600 text-4xl" />,
    },
    {
      title: "Supportive Platform",
      description: "Simple tutor selection and class management.",
      icon: <HiDesktopComputer className="text-purple-600 text-4xl" />,
    },
  ];

  return (
    <div className="font-poppins bg-gray-50">
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              At EduPoint, we believe that every student deserves access to
              quality education, tailored learning, and expert guidance. Our
              mission is to bridge the gap between students and top-tier
              teachers through a reliable and easy-to-use platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Who We Are
              </h3>
              <p className="text-gray-600 mb-6">
                EduPoint is a dynamic learning platform focused on delivering
                high-quality academic courses for students of all levels.
                Whether you're strengthening your foundation in core subjects
                like Mathematics, Science, and English, or preparing for board
                exams and university admissions, SkillSpark empowers you with
                expert-led content, structured modules, and interactive
                learning. Our goal is to ignite academic excellence by making
                learning accessible, affordable, and engaging—anytime, anywhere.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose HomeTutor?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>✅ Learn from top-rated educators</li>
                <li>✅ Transparent reviews and profiles</li>
                <li>✅ Secure and easy booking</li>
                <li>✅ Affordable and flexible pricing</li>
              </ul>
            </div>

            <div data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Tutor teaching student"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl font-bold text-gray-800 mb-12"
            data-aos="fade-up"
          >
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offer, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300 "
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="text-3xl mb-4 flex items-center justify-center">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              number: "50+",
              label: "Verified Tutors",
            },
            {
              number: "500+",
              label: "Students Helped",
            },
            {
              number: "97.9%",
              label: "Satisfaction Rate",
            },
          ].map((stat, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Ready to start learning?
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Whether you're a student looking to boost your grades or a parent
            searching for the best for your child, HomeTutor is here to help.
          </p>
          <Link to="/teachers">
            <button
              className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Find Your Tutor
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
