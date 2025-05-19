import { RiCalendarCheckLine } from "react-icons/ri";

const NumberOfClasses = ({ tuition }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          <RiCalendarCheckLine className="text-2xl text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Course Duration</p>
            <p className="text-xl font-bold">{tuition.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberOfClasses;
