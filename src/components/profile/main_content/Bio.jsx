
const Bio = ({user}) => {
  return (
    <div>
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-serif font-semibold text-gray-800 border-b-2 border-gray-500 pb-1">
              About me
            </h2>
          </div>

          <div className="font-serif text-gray-500">
            {user.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
