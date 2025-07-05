import { Link } from "react-router";
import { FaChalkboardTeacher, FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ teacher }) => {
  return (
    <Link to={`/teachers/${teacher.id}/`} >
      <div
        className="bg-white rounded-xl shadow-md p-4 text-center transition duration-300 hover:shadow-lg"
        data-aos="fade-up"
        data-aos-delay="100"
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
  );
};

export default Card;
