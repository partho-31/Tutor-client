const PersonalInfo = ({user}) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md p-6 lg:col-span-2">
        <h2 className="text-xl font-serif font-semibold mb-4 sm:mb-6 text-gray-800 border-b-2 pb-3 border-gray-500">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
          <div>
            <p className="text-gray-500 sm:mb-1 text-sm">Full Name</p>
            <p className="text-gray-800 font-medium">{user.first_name} {user.last_name}</p>
          </div>
          <div>
            <p className="text-gray-500 sm:mb-1 text-sm">Email Address</p>
            <p className="text-gray-800 overflow-hidden line-clamp-1 text-ellipsis font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-500 sm:mb-1 text-sm">Phone Number</p>
            <p className="text-gray-800 font-medium">{user.phone_number}</p>
          </div>

          <div>
            <p className="text-gray-500 sm:mb-1 text-sm">Address</p>
            <p className="text-gray-800 font-medium">
              {user.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
