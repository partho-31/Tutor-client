import { useForm } from "react-hook-form";
import authApiClient from "../../../services/authApiClient";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await authApiClient.post("api/contact/", data);
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-2">
      <input
        type="text"
        placeholder="Full name"
        {...register("name", { required: true })}
        className="w-full rounded-md border-gray-300 focus:outline-0 shadow-sm focus:border-indigo-900 focus:ring-indigo-900 px-3 p-1.5 border-2 bg-white/70"
      />
      {errors.name && <p className="text-red-600 text-sm">Name is required</p>}

      <input
        type="email"
        placeholder="Email address"
        {...register("email", { required: true })}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-900 focus:ring-indigo-900 px-3 p-1.5 border-2 focus:outline-0 bg-white/70"
      />
      {errors.email && (
        <p className="text-red-600 text-sm">Email is required</p>
      )}

      <input
        type="tel"
        placeholder="Phone number"
        {...register("phone")}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-900 focus:ring-indigo-900 px-3 p-1.5 border-2 focus:outline-0 bg-white/70"
      />

      <textarea
        rows="2"
        placeholder="Your message"
        {...register("message", { required: true })}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-900 focus:ring-indigo-900 px-3 p-2 border-2 focus:outline-0 bg-white/70"
      />
      {errors.message && (
        <p className="text-red-600 text-sm">Message is required</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 rounded-md bg-indigo-900 text-white hover:bg-indigo-800 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
