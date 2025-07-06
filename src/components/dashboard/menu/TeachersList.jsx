import useTeacherContext from "../../../hooks/useTeacherContext";
import DeleteBtnStudent from "../../button/DeleteBtnTeacher";
import DeleteBtnTeacher from "../../button/DeleteBtnTeacher";

const TeachersList = () => {
  const { teachers, loading, fetchTeachers } = useTeacherContext();
 

  return (
    <div className="flex-1 mx-auto ">
      <div className="text-xl sm:text-3xl sm:pl-3 pb-4 font-bold mb-6 text-gray-600 border-b-2 border-indigo-200 ">
        Teachers List
      </div>
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="space-y-4  ">
          {teachers?.results.map((teacher, index) => (
            <div
              className=" flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow-md p-4 border border-gray-200 mx-5"
              key={index}
            >
              <div className="flex items-center -ml-5 sm:ml-0 gap-2 sm:gap-4 sm:w-1/3">
                <p className="font-semibold text-gray-600">{index + 1}.</p>
                <img
                  className="size-16 rounded-full object-cover"
                  src={teacher.profile.image}
                  alt="Student"
                />
              </div>
              <div className="sm:w-1/3">
                <div className="font-medium text-gray-800">
                  {teacher.first_name} {teacher.last_name}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {teacher.profession}
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  {teacher.email}
                </div>
              </div>
              <div className="sm:w-1/3 flex sm:justify-end">
                <DeleteBtnTeacher id={teacher.id} handleFetch={fetchTeachers} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeachersList;
