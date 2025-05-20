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

const MenuBar = () => {
  const {logOut} = useAuthContext()
  return (
    <div className="w-full lg:w-1/4 sm:w-1/3 py-4 bg-gradient-to-b from-indigo-800 to-indigo-800 text-white px-5 lg:px-10 shadow-xl transition-all duration-300">
      <div className="p-3 flex items-center space-x-3 mb-6">
        <div className="bg-white text-primary p-2 rounded-lg">
          <FaUser className="text-xl" />
        </div>
        <span className="text-xl font-bold">Student Portal</span>
      </div>

      <nav className="space-y-2">
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <MdDashboard className="text-lg" />
            <span>Dashboard</span>
          </div>
        </Link>

        <Link to="/">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400 ">
            <FaHome className="text-lg" />
            <span>Home</span>
          </div>
        </Link>
        <Link to="profile">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </div>
        </Link>

        <Link to="paymetHistory">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaHistory className="text-lg" />
            <span>Payment History</span>
          </div>
        </Link>

        <Link to="changePassword">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaKey className="text-lg" />
            <span>Change Password</span>
          </div>
        </Link>

        <Link to="/forgetPassword">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaQuestionCircle className="text-lg" />
            <span>Forgot Password</span>
          </div>
        </Link>
        
          <div onClick={logOut} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
            <FaSignOutAlt className="text-lg" />
            <span>Sign Out</span>
          </div>
       

        <div className="pt-6 border-t border-white border-opacity-30 mt-6" />

        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-400">
          <FaHeadset className="text-lg" />
          <span>Support / Help</span>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
