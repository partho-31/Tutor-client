import { FiBell, FiBookOpen, FiKey, FiUser } from "react-icons/fi";
import { Link } from "react-router";
import useAuthContext from "../../../hooks/useAuthContext";

const MenuBar = () => {
  const {user} = useAuthContext()
  return (
    <div className="w-full lg:w-1/4 sm:w-1/3 py-4 bg-gradient-to-b from-blue-400 to-blue-600 text-white px-5 lg:px-10 shadow-xl transition-all duration-300">
      <div className="mb-6 lg:mb-10 text-center">
        <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-200 to-blue-300 flex items-center justify-center shadow-lg">
          <span className="text-2xl lg:text-3xl font-bold text-blue-800">PKM</span>
        </div>
        <h2 className="text-xl lg:text-2xl font-serif font-semibold">{user.first_name} {user.last_name}</h2>
      </div>

      <nav>
        <ul className="space-y-2 lg:space-y-3">
          <Link to="/profile">
            <li className="flex items-center p-3 lg:p-4 rounded-lg hover:bg-blue-700/50 transition-all">
              <FiUser className="h-5 w-5 mr-2 lg:mr-3" />
              <span className="text-sm lg:text-base">Profile Info</span>
            </li>
          </Link>

          <Link to="changePassword">
            <li className="flex items-center p-3 lg:p-4 rounded-lg hover:bg-blue-700/50 transition-all">
              <FiKey className="h-5 w-5 mr-2 lg:mr-3" />
              <span className="text-sm lg:text-base">Change Password</span>
            </li>
          </Link>

          <Link to="/forgetPassword"><li className="flex items-center p-3 lg:p-4 rounded-lg hover:bg-blue-700/50 transition-all">
              <FiBell className="h-5 w-5 mr-2 lg:mr-3" />
              <span className="text-sm lg:text-base">Forget Password</span>
            </li></Link>


          {user?.provided_tuitions? <Link to="providedTuition">
            <li className="flex items-center p-3 lg:p-4 rounded-lg hover:bg-blue-700/50 transition-all">
              <FiBookOpen className="h-5 w-5 mr-2 lg:mr-3" />
              <span className="text-sm lg:text-base">Provided Tuition</span>
            </li>
          </Link> : " "}

          {user.applied_tuition? <Link to="enrolledTuition">
            <li className="flex items-center p-3 lg:p-4 rounded-lg hover:bg-blue-700/50 transition-all">
              <FiBookOpen className="h-5 w-5 mr-2 lg:mr-3" />
              <span className="text-sm lg:text-base">Enrolled Tuition</span>
            </li>
          </Link> : " "}
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
