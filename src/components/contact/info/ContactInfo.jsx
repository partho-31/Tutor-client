import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const ContactInfo = () => {
    return (
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
    );
};

export default ContactInfo;