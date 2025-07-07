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
    <div className="mx-6 pt-5 scroll-hidden  h-screen overflow-y-auto">
      <nav className="space-y-3">

        {/* Dashboard  */}
        <Link to="/dashboard">
          <div className="group  flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-md transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <MdDashboard className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Dashboard</span>
          </div>
        </Link>

        {/* Home  */}
        <Link to="/">
          <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <FaHome className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Home</span>
          </div>
        </Link>

        {/* Profile View  */}
        <Link to="profile">
          <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <FaUser className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Profile</span>
          </div>
        </Link>

        {/* Add Tuition */}
        {(user?.role === "Teacher" || user?.is_staff) && (
          <Link to="courses-form">
            <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <GrAddCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Add Courses</span>
          </div>
          </Link>
        )}

        {/* Add Blogs */}
        {(user?.role === "Teacher" || user?.is_staff) && (
          <Link to="blog/addBlog">
            <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <GrAddCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Add Blogs</span>
          </div>
          </Link>
        )}

        {/* Teachers List  */}
        {user?.is_staff && (
          <Link to="teachersList">
          <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <LiaChalkboardTeacherSolid className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Teachers List</span>
          </div>
          </Link>
        )}

        {/* Student List  */}
        {user?.is_staff && (
          <Link to="studentsList">
            <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <PiStudent className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Students List</span>
          </div>
          </Link>
        )}

        {/* Payment History  */}
        <Link to="paymetHistory">
          <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <FaHistory className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Payment History</span>
          </div>
        </Link>

        {/* Change Password  */}
        <Link to="changePassword">
          <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <FaKey className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Change Password</span>
          </div>
        </Link>

        {/* Forgot Password  */}
        <Link to="/forgetPassword">
          <div className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <FaQuestionCircle className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Forgot Password</span>
          </div>
        </Link>

        {/* Sign Out  */}
        <div onClick={logOut} className="group mt-3 flex items-center  space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <FaSignOutAlt className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Sign Out</span>
          </div>

        <div className=" border-t border-gray-600 border-opacity-30 " />

        {/* Contact Inbox  */}
        {user?.is_staff && (
          <Link to="contact/messages">
            <div className="group mt-3 flex items-center space-x-2 p-2 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <BsEnvelopeArrowDown className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Contact</span>
          </div>
          </Link>
        )}

        {/* Support or Help  */}
        {!user?.is_staff && (
          <Link to="/contact-us">
            <div className="group mt-3 flex items-center space-x-2 px-2 py-1 rounded-lg hover:bg-white hover:shadow-lg transition">
            <div className="p-1.5 rounded-md shadow-md shadow-gray-300 group-hover:bg-blue-600 group-hover:shadow-md transition">
              <FaHeadset className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-md font-medium text-gray-700">Support / Help</span>
          </div>
          </Link>
        )}

        <div className="h-40"></div>
      </nav>
    </div>
  );
};

export default MenuBar;
