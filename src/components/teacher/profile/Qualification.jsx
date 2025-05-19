import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Qualification = ({ teacher }) => {
  return (
    <div>
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Qualifications & Experience
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Education</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start">
                <FaGraduationCap
                  className="text-indigo-500 mt-1 mr-3"
                  size={18}
                />
                <div>
                  <p className="font-medium">{teacher.qualifications}</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              Professional Experience
            </h3>
            <div className="mt-2 space-y-4">
              <div className="flex items-start">
                <FaBriefcase className="text-indigo-500 mt-1 mr-3"  />
                <div>
                  <p className="font-medium">
                    {teacher.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualification;
