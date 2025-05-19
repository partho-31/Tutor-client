import { RiCheckboxCircleFill } from "react-icons/ri";

const DetailsAboutCourse = ({ tuition }) => {
  const lines = tuition.outcomes
    ? tuition.outcomes.split(".").filter((line) => line.trim() !== "")
    : [];
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          What You'll Learn
        </h3>
        <ul className="">
          {lines.map((line, index) => (
            <li className="flex items-start space-x-2 mb-2" key={index}>
              <RiCheckboxCircleFill className="text-green-500 mt-1" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailsAboutCourse;
