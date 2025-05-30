import { Link } from "react-router";


const TuitionCard = ({ tuition }) => {
  const tuition_url = `https://res.cloudinary.com/dinzf10l3/${tuition.image}`;

  return (
    <Link to={`/courses/${tuition.id}/`}> 
      <div className="max-w-sm mx-auto">
        <div
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 h-[26rem] hover:shadow-xl hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Image with subtle overlay */}
          <div className="relative h-48">
            <img
              className="h-full w-full object-cover"
              src={tuition_url}
              alt={tuition.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            {/* Subject and Class */}
            <div className="flex items-center text-xs sm:text-sm font-semibold text-purple-600 mb-2">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {tuition.subjects} - {tuition.classes}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-blue-500 mb-2">
              {tuition.title}
            </h3>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm mb-4">{tuition.sub_title}</p>

            {/* Fee */}
            <div className="flex items-center text-gray-700 mb-5">
              <span className="font-medium">Fee: </span>
              <span className="ml-1 font-bold text-gray-800">
                BDT {tuition.fee}
              </span>
              <span className="ml-1 text-xs text-gray-500">/month</span>
            </div>

            {/* Button */}
            <button className="flex items-center font-medium ">
              <span className="mr-1 text-green-500">Learn More...</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TuitionCard;
