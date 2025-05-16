import React from "react";
import { Link } from "react-router";
import { FaStar, FaChalkboardTeacher, FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ teacher }) => {
  
  return (
    <Link to={`/teachers/${teacher.id}/`} className="group">
      <div
        className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-xl border border-white/20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Teacher Image with Glow Effect */}
         <div className="relative overflow-hidden rounded-md w-36 h-36 mx-auto mb-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-purple-200 opacity-0 group-hover:opacity-30 rounded-md transition-opacity duration-500 z-10"></div>
          <img
            src={teacher.profile.image}
            alt={`${teacher.first_name} ${teacher.last_name}`}
            className="w-full h-full object-cover border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Teacher Info */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
            {teacher.first_name} {teacher.last_name}
          </h3>
          
          <div className="flex items-center justify-center gap-2">
            <FaChalkboardTeacher className="text-purple-500" />
            <p className="text-lg font-medium text-purple-600">
              {teacher.profession}
            </p>
          </div>
            <p className="text-lg font-medium text-purple-600">
              {teacher.institute}
            </p>

          <div className="flex items-center justify-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-gray-400" />
            <p className="text-sm">{teacher.address}</p>
          </div>
        </div>

       
        <div className="mt-6 space-y-3">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 group-hover:scale-105">
            Book Session
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;