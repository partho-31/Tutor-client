import useTeacherContext from "../../hooks/useTeacherContext";
import Card from "./Card/TeacherCard";

const TeacherCards = () => {
  const { teachers, loading } = useTeacherContext()

  return (
    <div className=" mx-auto sm:px-16 px-6 bg-gray-200">
      {loading && (
        <div className="w-full flex justify-center h-lvh">
          <span className="loading loading-spinner text-info"></span>
        </div>
      )}
      <div className=" sm:py-12 py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teachers?.results.map((teacher, index) => (
          <div key={index}>
            <Card teacher={teacher} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherCards;
