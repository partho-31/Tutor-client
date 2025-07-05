import { useEffect } from "react";
import AOS from "aos";
import ContactForm from "../components/contact/contactForm/ContactForm";
import ContactInfo from "../components/contact/info/ContactInfo";


const ContactUs = () => {
  

  useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <div className=" relative min-h-screen flex items-center justify-center px-4">
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

      
      <div className="z-20 mb-6 mt-10 sm:mt-0  backdrop-blur-sm rounded-xl  max-w-3xl w-full mx-auto flex flex-col lg:flex-row overflow-hidden " data-aos="fade-right">
        {/* Form Section */}
        <div className="lg:w-[55%] bg-white/30 p-6 sm:p-8" >
          <h2 className="text-2xl text-center font-bold text-indigo-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-200 mb-4 sm:mb-6 text-sm">
            We'd love to hear from you. Send us a message and we’ll respond
            shortly.
          </p>

          <ContactForm />
        </div>

        {/* Contact Info Section */}
       <ContactInfo />
      </div>
    </div>
  );
};

export default ContactUs;
