import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuthContext from "../hooks/useAuthContext";
import MenuBar from "../components/dashboard/sidebar/MenuBar";
import { Link } from "react-router";


const DashNav = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { user, logOut } = useAuthContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < 640 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex sticky bg-gray-100 h-screen top-0 overflow-hidden">
      {/* Mobile sidebar toggle button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="sm:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white mt-0.5 p-1.5 rounded-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Fixed Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed sm:static bg-white z-40 w-60 sm:w-72 h-screen shadow-lg transform transition-transform duration-300
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
          }`}
      >
        <div className="p-4 text-center shadow-sm flex items-center justify-center  text-md font-bold text-blue-600">
          <span className="text-2xl">EduPoint</span>
        </div>

        {/* Sidebar Section */}
        <MenuBar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Navbar */}
        <header className=" shadow-sm py-0 z-30">
          <div className="px-4 pl-13 sm:pl-10 sm:px-10 py-3 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="navbar-end flex gap-2 items-center">
              {/* User Avatar Dropdown */}
              <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.profile_info.image}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <Link to="dashboard">
                  <li>
                    <button className="justify-between">Dashboard</button>
                  </li>{" "}
                </Link>
                <li>
                  <button onClick={logOut}>Sign Out</button>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto p-4 bg-gray-200">
          {children || (
            <>
              <h2 className="text-xl font-semibold mb-4">Welcome Back!</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white p-4 rounded-lg shadow">
                    Widget {item}
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashNav;