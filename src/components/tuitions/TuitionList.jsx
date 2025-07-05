import TuitionCard from "./card/TuitionCard.jsx";

const TuitionList = ({ tuitions, loading }) => {
  return (
    <div className="container mx-auto px-0 mb-5">
      <p className="font-semibold text-xl text-gray-500 sm:mb-5">Showing results :</p>
      {loading && (
        <div className="w-full flex justify-center h-lvh">
          <span className="loading loading-spinner text-info"></span>
        </div>
      )}

      <div className="md:my-0 my-2 sm:my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tuitions?.map((tuition, index) => (
          <div key={index}>
            <TuitionCard tuition={tuition} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuitionList;
