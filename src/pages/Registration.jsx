import RegistrationForm from "../components/registration/RegistrationForm";

const Register = () => {
  
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url('https://res.cloudinary.com/dinzf10l3/image/upload/v1747369185/black-notebook-with-pen_fmelpt.jpg')` }}
    >
      
     <RegistrationForm />
    </div>
  );
};

export default Register;
