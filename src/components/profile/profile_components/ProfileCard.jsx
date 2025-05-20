import { FiEdit, FiMapPin } from "react-icons/fi";
import { Link } from "react-router";

const ProfileCard = ({ user }) => {
  return (
    
      <div>
        <div className=" px-8 pb-6 shadow-md md:mb-10 mb-3 ">
          <div className="flex items-baseline">
            <div className="w-32 h-32 my-4 rounded-full border-4 border-blue-200 bg-gradient-to-r from-yellow-200 to-blue-300 shadow-xl overflow-hidden">
              <img src={user.profile_info.image} className="w-full h-full object-cover"/>
            </div>
            <Link to="upload-img"><div className="text-blue-900">
              <FiEdit className="h-5 w-5 mr-2 mb-1.5 " />
            </div></Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-800">
                {user.first_name} {user.last_name}
              </h1>
              <p className="text-blue-600 mt-1">
                {user.profession}
              </p>
              <div className="flex items-center mt-3 text-sm text-gray-600">
                <FiMapPin className="h-4 w-4 mr-1" />
                {user.address}
              </div>
            </div>
            <Link to="editProfile">
              <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all flex items-center">
                <FiEdit className="h-5 w-5 mr-2" />
                Edit Profile Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default ProfileCard;
