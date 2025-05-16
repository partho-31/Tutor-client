import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const TeacherInfo = ({ teacher }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Contact Information
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <FiMail className="text-indigo-500 mt-1 mr-3" size={18} />
            <div>
              <p className="text-gray-600">Email</p>
              <a
                href= {teacher.email}
                className="text-indigo-600 hover:underline"
              >
                {teacher.email}
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <FiPhone className="text-indigo-500 mt-1 mr-3" size={18} />
            <div>
              <p className="text-gray-600">Phone</p>
              <p className="text-gray-800">(+88) {teacher.phone_number} </p>
            </div>
          </div>
          <div className="flex items-start">
            <FiMapPin className="text-indigo-500 mt-1 mr-3" size={18} />
            <div>
              <p className="text-gray-600">Office</p>
              <p className="text-gray-800">{teacher.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherInfo;
