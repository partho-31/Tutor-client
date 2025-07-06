import useFetchStudents from "../../../hooks/useFetchStudents";
import DeleteBtnStudent from "../../button/DeleteBtnStudent";

const StudentList = () => {
  const { students, loading, fetchStudents } = useFetchStudents();

  return (
    <div className="flex-1 mx-auto ">
      <div className="text-xl sm:text-3xl sm:pl-3 pb-4 font-bold mb-6 text-gray-600 border-b-2 border-indigo-200 ">
        Students List
      </div>
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="space-y-4">
          {students?.map((student, index) => (
            <div
              className=" flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow-md px-4 sm:py-4 border border-gray-200 sm:mx-5 mx-3"
              key={index}
            >
              <div className="flex items-center -ml-5 sm:ml-0 gap-2 sm:gap-4 sm:w-1/3">
                <p className="font-semibold text-gray-600">{index + 1}.</p>
                <img
                  className="size-16 rounded-full object-cover"
                  src={student.profile_info.image}
                  alt="Student"
                />
              </div>
              <div className="sm:w-1/3  flex flex-col items-center">
                <div className="font-medium text-gray-800">
                  {student.first_name} {student.last_name}
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  {student.email}
                </div>
              </div>
              <div className="sm:w-1/3 flex justify-end">
                <DeleteBtnStudent id={student.id} handleFetch={fetchStudents} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;
