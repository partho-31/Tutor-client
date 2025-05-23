import { RiGroupLine } from "react-icons/ri";

const EnrolledStudents = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          <RiGroupLine className="text-2xl text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Enrolled Students</p>
            <p className="text-2xl font-bold">5+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledStudents;
