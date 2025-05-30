import { useEffect } from "react";
import AOS from "aos";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import apiClient from "../services/apiClient";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await apiClient.post("api/contact/", data);
      alert("Message sent successfully!")
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.")
    }
  };

  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        data-aos="fade-left"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      
      <div className="z-20 mb-6  backdrop-blur-sm rounded-xl  max-w-3xl w-full mx-auto flex flex-col lg:flex-row overflow-hidden " data-aos="fade-right">
        {/* Form Section */}
        <div className="lg:w-[55%] bg-white/30 p-6 sm:p-8" >
          <h2 className="text-2xl text-center font-bold text-indigo-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-200 mb-6 text-sm">
            We'd love to hear from you. Send us a message and we’ll respond
            shortly.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-2"
          >
            <input
              type="text"
              placeholder="Full name"
              {...register("name", { required: true })}
              className="w-full rounded-md border-gray-300 focus:outline-0 shadow-sm focus:border-indigo-900 focus:ring-indigo-900 px-3 p-1.5 border-2 bg-white/70"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">Name is required</p>
            )}

            <input
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-900 focus:ring-indigo-900 px-3 p-1.5 border-2 focus:outline-0 bg-white/70"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">Email is required</p>
            )}

            <input
              type="tel"
              placeholder="Phone number"
              {...register("phone")}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-900 focus:ring-indigo-900 px-3 p-1.5 border-2 focus:outline-0 bg-white/70"
            />

            <textarea
              rows="2"
              placeholder="Your message"
              {...register("message", { required: true })}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-900 focus:ring-indigo-900 px-3 p-2 border-2 focus:outline-0 bg-white/70"
            />
            {errors.message && (
              <p className="text-red-600 text-sm">Message is required</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="lg:w-[45%] bg-indigo-900 text-white p-6 flex flex-col justify-center space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-xl mt-1" />
            <div>
              <p className="font-semibold">SMR HALL, JUST</p>
              <p>7406 Shorok, Jashore</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-xl mt-1" />
            <div>
              <p className="font-semibold">(+880) 134-5678</p>
              <p>Mon–Fri, 9am–5pm</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-xl mt-1" />
            <div>
              <p className="font-semibold">edupoint@gmail.com</p>
              <p>We usually respond within a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
