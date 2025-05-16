import  { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const {registration,errorMsg} = useAuthContext()
  const [loading, setloading] = useState(false);
  
 

  const handleClick = (data) => { 
    delete data.confirm_password;
    setloading(true);
    const handleRegister = async () => {
      try {
        const res = await registration(data)
        console.log('Partho')
        if (res.success) {document.getElementById("my_modal_1").showModal();}
      } catch (error) {
        console.log("Registration error", error.response);
      } finally {
        setloading(false);
      }
    };
    handleRegister();  
  };

  return (
    <div className="w-full max-w-md bg-white/0 backdrop-blur-sm rounded-xl shadow-lg p-8 my-16  border border-white/30">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white drop-shadow">
          Create Account
        </h2>
        <p className="text-sm text-white/80 mt-1">Fill in your details below</p>
      </div>
      {errorMsg? <span className="text-red-400 text-mono uppercase">{errorMsg}</span>: null}
      <form className="space-y-5" onSubmit={handleSubmit(handleClick)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 font-serif text-sm mb-1">
              First Name
            </label>
            <input
              {...register("first_name")}
              type="text"
              placeholder="John"
              className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-white/80 font-serif text-sm mb-1">
              Last Name
            </label>
            <input
              {...register("last_name")}
              type="text"
              placeholder="Doe"
              className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="mail@site.com"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
          />
          {errors.email && <p>Please enter valid email.</p>}
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required!" })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
            required
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          <p className="text-xs text-white/60 mt-1">
            Must include uppercase, lowercase, and number.
          </p>
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Confirm Password
          </label>
          <input
            {...register("confirm_password", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Password did not match",
            })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
            required
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
          {errors.confirm_password && (
            <span className="text-white/60  text-xs mb-1">
              {errors.confirm_password.message}
            </span>
          )}
        </div>

          <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Phone No.
          </label>
          <input
            {...register("phone_number", { required: true })}
            
            placeholder="+880 1712 345678"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none"
          />
          {errors.phone_number && <p>Please enter valid number!</p>}
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-1">
            Address
          </label>
          <textarea
            {...register("address")}
            placeholder="Your address"
            rows="3"
            className="w-full px-4 py-2 bg-transparent text-white placeholder-white/70 rounded-lg border border-white/30 focus:outline-none resize-none"
          />
        </div>

        <div>
          <label className="block text-white/80 font-serif text-sm mb-2">
            Select Role
          </label>
          <div className="flex gap-6 text-white">
            <label className="flex items-center gap-2">
              <input
                {...register("role", { required: "Please select a role" })}
                type="radio"
                name="role"
                value="Student"
                className="form-radio text-blue-500"
              />
              <span>Student</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                {...register("role", { required: "Please select a role" })}
                type="radio"
                name="role"
                value="Teacher"
                className="form-radio text-blue-500"
              />
              <span>Teacher</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-white/20 font-bold text-white rounded-lg hover:bg-white/30 transition duration-200"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        <div className="text-center mt-2">
          <p className="text-sm text-white/70">
            Already have an account?{" "}
            <button className="hover:underline text-white/90 font-semibold">
              Login
            </button>
          </p>
        </div>
      </form>

      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Dear Sir!</h3>
            <p className="py-4">
              A message is send to your email.Please click on the activation
              link to active your accout!
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/login"><button className="btn">Close</button></Link>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default RegistrationForm;
