import useFetchStudents from "../../../hooks/useFetchStudents";
import DeleteBtnStudent from "../../button/DeleteBtnStudent";

const StudentList = () => {
  const { students, loading, fetchStudents } = useFetchStudents();

  return (
    <div className="flex-1 mx-auto ">
      <div className="text-3xl pl-10 py-8 font-semibold mb-6 text-gray-800 border-b-2 border-indigo-200 ">
        Students List
      </div>
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="space-y-4 px-4 mx-5">
          {students?.map((student, index) => (
            <div
              className="list-row flex items-center justify-between bg-white rounded-lg shadow-md p-4 border border-gray-200 mx-5"
              key={index}
            >
              <div className="flex items-center gap-4 w-1/3">
                <p className="font-semibold text-gray-600">{index + 1}.</p>
                <img
                  className="size-16 rounded-full object-cover"
                  src={student.profile_info.image}
                  alt="Student"
                />
              </div>
              <div className="w-1/3">
                <div className="font-medium text-gray-800">
                  {student.first_name} {student.last_name}
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  {student.email}
                </div>
              </div>
              <div className="w-1/3 flex justify-end">
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
