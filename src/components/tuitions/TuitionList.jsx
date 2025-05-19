import TuitionCard from "./card/TuitionCard.jsx";

const TuitionList = ({ tuitions, loading }) => {
  return (
    <div className="container mx-auto px-6 ">
      {loading && (
        <div className="w-full flex justify-center h-lvh">
          <span className="loading loading-spinner text-info"></span>
        </div>
      )}

      <div className="md:my-12 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tuitions?.results?.map((tuition, index) => (
          <div key={index}>
            <TuitionCard tuition={tuition} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuitionList;
