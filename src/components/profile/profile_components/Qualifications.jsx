
const Qualifications = ({user}) => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-serif font-semibold mb-3 sm:mb-6 text-gray-800 border-b-2 pb-3 border-gray-500">
          Qualifications
        </h2>

        <div className="space-y-5">
          <h1>
            {user.qualifications}
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
