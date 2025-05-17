import Filter from "../components/tuitions/filter/Filter";
import TuitionList from "../components/tuitions/TuitionList";
import useAuthContext from "../hooks/useAuthContext";
import useFetchTuitions from "../hooks/useFetchTuitions";

const Tuitions = () => {
  const { user } = useAuthContext();
  const {
    tuitions,
    loading,
    searchBySub,
    setSearchBySub,
    searchByClass,
    setSearchByClass,
    searchByTeacher,
    setSearchByTeacher,
  } = useFetchTuitions();

  return (
    <div>
      <Filter
        user={user}
        searchBySub={searchBySub}
        handleSearchBySub={setSearchBySub}
        searchByClass={searchByClass}
        handleSearchByClass={setSearchByClass}
        searchByTeacher={searchByTeacher}
        handleSearchByTeacher={setSearchByTeacher}
      />
      <TuitionList tuitions={tuitions} loading={loading} />
    </div>
  );
};

export default Tuitions;
