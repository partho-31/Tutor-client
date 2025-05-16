const TeacherInfo = ({ tuition }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-5 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Meet Your Instructor
      </h3> 
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="relative">
          <img
            src={tuition.teacher?.profile?.image}
            alt="Instructor"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Teacher Details */}
        <div className="flex-1">
          <h4 className="text-xl font-extrabold text-gray-800">
            {tuition.teacher?.first_name} {tuition.teacher?.last_name}
          </h4>
          
          <p className="text-sm text-blue-600 mt-1">
           {tuition.teacher?.profession}
          </p>
          
          
          
          <div className="mt-2 flex items-center">
          
            <span className="text-sm font-medium text-shadow-pink-700">{tuition.teacher?.institute}</span>
          </div>
          <div className="mt-3 flex items-center">
            <svg className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-700"> {tuition.teacher?.experience}</span>
          </div>
          
        </div>
      </div>

      {/* Contact Button */}
      <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Contact Instructor
      </button>
    </div>
  );
};

export default TeacherInfo;