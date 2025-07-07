import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, errorMsg } = useAuthContext();

  const onSubmit = async (data) => {
    setloading(true);
    try {
      await login(data);
    } catch (error) {
      toast.error("Something went wrong",{
        position : "top-center"
      })
      return { error : error}
    } finally {
      setloading(false);
    }
  };
  const navigate = useNavigate();
  const handleClick = () => navigate("/registration");

  const handleAdminLogin = () => {
    setloading(true)
    login({
      email: "parthokumarmondal90@gmail.com",
      password: "Password@12",
    });
  };

  const handleTeacherLogin = () => {
    setloading(true)
    login({
      email: "7vb20gd3w4@daouse.com",
      password: "Password@12",
    });
  };

  const handleStudentLogin = () => {
    setloading(true)
    login({
      email: "4e9hw08m9r@cmhvzylmfc.com",
      password: "Password@12",
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 "
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dinzf10l3/image/upload/v1747369185/black-notebook-with-pen_fmelpt.jpg')`,
      }}
    >
      <div className="w-full max-w-md bg-white/0 backdrop-blur-xs rounded-xl shadow-lg p-8  border border-white/30">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white drop-shadow">
            Welcome Back
          </h2>
          <p className="text-sm text-white/80 mt-1">
            Sign in to your account below
          </p>
        </div>
        <div>{errorMsg && <span className="text-white">{errorMsg}</span>}</div>
        <div>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-white/80 font-serif   text-sm mb-1">
                Your Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="mail@site.com"
                className="w-full px-4 py-2  text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              {errors.email && <span>{errors.email?.message}</span>}
            </div>

            <div>
              <label className="block text-white/80 font-serif text-sm mb-1">
                Password
              </label>
              <div className="flex items-center  rounded-lg border border-white/30 px-3 py-2">
                <svg
                  className="h-5 w-5 text-white/60 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                </svg>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  minLength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  className="bg-transparent w-full text-white placeholder-white/70 focus:outline-none"
                />
              </div>
              <p className="text-xs text-white/60 mt-1">
                Password must be 8+ characters with number, uppercase &
                lowercase.
              </p>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
            >
              {loading ? "Loading.." : "Sign In"}
            </button>
              <p className="text-center  font-bold text-white">As</p>
            <div className=" flex gap-3">
              <button
                onClick={handleAdminLogin}
                className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
              >
                Admin
              </button>

              <button
                onClick={handleTeacherLogin}
                className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
              >
                Teacher
              </button>

              <button
                onClick={handleStudentLogin}
                className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
              >
                Student
              </button>
            </div>
          </form>

          <div className="text-center mt-1">
            <Link
              to="/forgetPassword"
              className="text-sm text-white/80 hover:underline"
            >
              Forgot password?
            </Link>
            <hr className="m-3 text-gray-500" />
            <button
              onClick={handleClick}
              type="button"
              className="w-full mb-4 py-2 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
