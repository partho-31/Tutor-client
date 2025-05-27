import useFetchTeachers from "../../../hooks/useFetchTeachers";

const TeachersList = () => {
  const { teachers, loading } = useFetchTeachers();
  console.log(teachers);
  return (
    <div className="flex-1 mx-auto ">
      <div className="text-3xl pl-10 py-8 font-semibold mb-6 text-gray-800 border-b-2 border-indigo-200 ">
        Teachers List
      </div>
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="space-y-4 px-4 mx-5">
          {teachers?.results.map((teacher, index) => (
            <div
              className="list-row flex items-center justify-between bg-white rounded-lg shadow-md p-4 border border-gray-200 mx-5"
              key={index}
            >
              <div className="flex items-center gap-4 w-1/3">
                <p className="font-semibold text-gray-600">{index + 1}.</p>
                <img
                  className="size-16 rounded-full object-cover"
                  src={teacher.profile.image}
                  alt="Student"
                />
              </div>
              <div className="w-1/3">
                <div className="font-medium text-gray-800">
                  {teacher.first_name} {teacher.last_name}
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  {teacher.profession}
                </div>
                <div className="text-sm font-semibold text-gray-500">
                  {teacher.email}
                </div>
              </div>
              <div className="w-1/3 flex justify-end">
                <button className="btn btn-outline btn-error">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeachersList;
