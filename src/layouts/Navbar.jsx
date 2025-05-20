import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { user, logOut } = useAuthContext();

  return (
    <div className="bg-indigo-950">
      <div className="navbar p-5">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="px-2 text-white font lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="tuitions">Tuitions</Link>
              </li>
              <li>
                <Link to="teachers">Teachers</Link>
              </li>
              <li>
                <Link to="about-us">About Us</Link>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <p className=" text-white text-lg lg:text-2xl font-bold">HomeTutor</p>
        </div>
        <div className="navbar-center hidden lg:flex text-white font-bold ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="tuitions">Tuitions</Link>
            </li>
            <li>
              <Link to="teachers">Teachers</Link>
            </li>
            <li>
              <Link to="about-us">About Us</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end ms-4 flex gap-1 md:gap-2">
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
                <Link to="dashboard"><li><button className="justify-between">Dashboard</button></li> </Link>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logOut}>Sign Out</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end ms-4 flex gap-1 md:gap-2">
            <Link to="login">
              <button className="btn btn-xs sm:btn-sm md:btn-md bg-pink-500 text-white border-0">
                Sign In
              </button>
            </Link>
            <Link to="registration">
              <button className="btn btn-xs sm:btn-sm md:btn-md bg-pink-500 text-white border-0">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
