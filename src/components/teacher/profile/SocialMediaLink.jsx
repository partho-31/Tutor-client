import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa"; 

const SocialMediaLink = () => {
  return (
    <div className="max-w-sm mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Connect
        </h2>
        <div className="flex space-x-6 justify-center">
          <a href="#" className="text-indigo-600 hover:text-indigo-800">
            Linkdin
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="#" className="text-indigo-600 hover:text-indigo-800">
            Twitter
            <FaTwitter className="text-3xl" />
          </a>

          <a href="#" className="text-indigo-600 hover:text-indigo-800">
            Website
            <FaGlobe className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLink;
