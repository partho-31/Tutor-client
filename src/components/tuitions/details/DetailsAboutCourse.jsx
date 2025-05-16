import { RiCheckboxCircleFill } from "react-icons/ri";

const DetailsAboutCourse = ({tuition}) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          What You'll Learn
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li className="flex items-start space-x-2">
            <RiCheckboxCircleFill className="text-green-500 mt-1" />
            <span>{tuition.outcomes}</span>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default DetailsAboutCourse;
