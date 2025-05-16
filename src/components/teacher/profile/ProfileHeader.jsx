
const ProfileHeader = ({ teacher }) => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 md:mb-0 md:mr-8">
              <img
                src={teacher.profile?.image}
                alt="Dr. Sarah Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800">
                {teacher.first_name} {teacher.last_name}
              </h1>
              <p className="text-xl text-indigo-600 mt-1">
                {teacher.profession}
              </p>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <div className="flex text-yellow-400 text-3xl font-bold">
                  {teacher.institute}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ProfileHeader;
