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
    <div className="mx-6 mt-5 mb-20">
      <nav className="space-y-3">
        {/* Dashboard  */}
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
            <MdDashboard className="text-lg" />
            <span>Dashboard</span>
          </div>
        </Link>

        {/* Home  */}
        <Link to="/">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400 ">
            <FaHome className="text-lg" />
            <span>Home</span>
          </div>
        </Link>

        {/* Profile View  */}
        <Link to="profile">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </div>
        </Link>

        {/* Add Tuition */}
        {(user?.role === "Teacher" || user?.is_staff) && (
          <Link to="/courses-form">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
              <GrAddCircle className="text-lg" />
              <span className="font-medium">Add Courses</span>
            </div>
          </Link>
        )}

        {/* Teachers List  */}
        {user?.is_staff && (
          <Link to="teachersList">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
              <LiaChalkboardTeacherSolid className="text-lg" />
              <span className="font-medium">Teachers List</span>
            </div>
          </Link>
        )}

        {/* Student List  */}
        {user?.is_staff && (
          <Link to="studentsList">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
              <PiStudent className="text-lg" />
              <span className="font-medium">Students List</span>
            </div>
          </Link>
        )}

        {/* Payment History  */}
        <Link to="paymetHistory">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
            <FaHistory className="text-lg" />
            <span>Payment History</span>
          </div>
        </Link>

        {/* Change Password  */}
        <Link to="changePassword">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
            <FaKey className="text-lg" />
            <span>Change Password</span>
          </div>
        </Link>

        {/* Forgot Password  */}
        <Link to="/forgetPassword">
          <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
            <FaQuestionCircle className="text-lg" />
            <span>Forgot Password</span>
          </div>
        </Link>

        {/* Sign Out  */}
        <div
          onClick={logOut}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Sign Out</span>
        </div>

        <div className=" border-t border-gray-600 border-opacity-30 " />

        {/* Contact Inbox  */}
        {user?.is_staff && (
          <Link to="contact/messages">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
              <BsEnvelopeArrowDown className="text-lg" />
              <span>Messages</span>
            </div>
          </Link>
        )}

        {/* Support or Help  */}
        {user?.is_staff && (
          <Link to="/contact-us">
            <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-400">
              <FaHeadset className="text-lg" />
              <span>Support / Help</span>
            </div>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default MenuBar;
