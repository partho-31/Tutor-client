import {
  FaHeadset,
  FaHistory,
  FaHome,
  FaKey,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";
import useAuthContext from "../../../hooks/useAuthContext";
import { GrAddCircle } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BsEnvelopeArrowDown } from "react-icons/bs";

const MenuBar = () => {
  const { logOut, user } = useAuthContext();
  return (
    <div className="w-full lg:w-1/5 sm:w-1/3 py-4 bg-gradient-to-b from-indigo-900 to-indigo-900 text-white px-5 lg:px-10 shadow-xl transition-all duration-300">
      <div className="flex justify-center">
        <div className="w-24 h-24 my-4 rounded-full overflow-hidden">
          <img
            src={user.profile_info.image}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-md text-gray-300 font-semibold mb-6">
        <h1 className="uppercase">{user.first_name} {user.last_name}</h1>
        <p>{user.email}</p>
      </div>

      <nav className="space-y-2">
        {/* Dashboard  */}
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <MdDashboard className="text-lg" />
            <span>Dashboard</span>
          </div>
        </Link>

        {/* Home  */}
        <Link to="/">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400 ">
            <FaHome className="text-lg" />
            <span>Home</span>
          </div>
        </Link>

        {/* Profile View  */}
        <Link to="profile">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </div>
        </Link>

        {/* Add Tuition */}
        {(user?.role === "Teacher" || user?.is_staff ) && (
          <Link to="/courses-form">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
              <GrAddCircle className="text-lg" />
              <span className="font-medium">Add Courses</span>
            </div>
          </Link>
        )}

        {/* Teachers List  */}
        {user?.is_staff && (
          <Link to="teachersList">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
              <LiaChalkboardTeacherSolid className="text-lg" />
              <span className="font-medium">Teachers List</span>
            </div>
          </Link>
        )}

        {/* Student List  */}
        {user?.is_staff && (
          <Link to="studentsList">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
              <PiStudent className="text-lg" />
              <span className="font-medium">Students List</span>
            </div>
          </Link>
        )}

        {/* Payment History  */}
        <Link to="paymetHistory">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaHistory className="text-lg" />
            <span>Payment History</span>
          </div>
        </Link>

        {/* Change Password  */}
        <Link to="changePassword">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaKey className="text-lg" />
            <span>Change Password</span>
          </div>
        </Link>

        {/* Forgot Password  */}
        <Link to="/forgetPassword">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaQuestionCircle className="text-lg" />
            <span>Forgot Password</span>
          </div>
        </Link>

        {/* Sign Out  */}
        <div
          onClick={logOut}
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Sign Out</span>
        </div>

        <div className="pt-6 border-t border-white border-opacity-30 mt-6" />

        {/* Contact Inbox  */}
        {user?.is_staff && (
        <Link to="">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <BsEnvelopeArrowDown className="text-lg" />
            <span>Messages</span>
          </div>
        </Link>)}

        {/* Support or Help  */}
        <Link to="/contact-us">
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
          <FaHeadset className="text-lg" />
          <span>Support / Help</span>
        </div></Link>
      </nav>
      
    </div>
  );      
};

export default MenuBar;
