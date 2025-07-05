import { useEffect, useState } from "react";
import Filter from "../components/tuitions/filter/Filter";
import TuitionList from "../components/tuitions/TuitionList";
import useAuthContext from "../hooks/useAuthContext";
import useTuitionContext from "../hooks/useTuitionContext";

const Tuitions = () => {
  const { user } = useAuthContext();
  const { tuitions, loading } = useTuitionContext();
  const [filteredTuition, setFilteredTuition] = useState([]);
  const [searchBySub, setSearchBySub] = useState("");
  const [searchByClass, setSearchByClass] = useState("");
  const [ordering, setOrdering] = useState("");

  useEffect(() => {
    let filtered = tuitions?.results?.filter((tuition) => {
      const matcheClass = searchByClass
        ? tuition.classes == searchByClass
        : true;

      const matchesSub = searchBySub
        ? tuition.title.toLowerCase().includes(searchBySub.toLowerCase())
        : true;

      return matcheClass && matchesSub;
    });

    if (ordering) {
      filtered = filtered.slice();
      filtered.sort((a, b) => {
        switch (ordering) {
          case "created_at":
            return new Date(a.created_at) - new Date(b.created_at);
          case "-created_at":
            return new Date(b.created_at) - new Date(a.created_at);
          default:
            return 0;
        }
      });
    }
    setFilteredTuition(filtered);
  }, [ordering, searchByClass, searchBySub, tuitions?.results]);

  return (
    <div className="bg-gray-200  flex flex-col sm:flex-row gap-6 px-6 sm:px-8 ">
      <div className="w-full sm:w-1/4 h-fit sticky top-20 -ml-5 sm:-ml-0 sm:top-24 z-10">
        <Filter
          user={user}
          searchBySub={searchBySub}
          handleSearchBySub={setSearchBySub}
          searchByClass={searchByClass}
          handleSearchByClass={setSearchByClass}
          ordering={ordering}
          setOrdering={setOrdering}
        />
      </div>

      <div className="w-full sm:mt-5 sm:w-3/4">
        <TuitionList tuitions={filteredTuition} loading={loading} />
      </div>
    </div>
  );
};

export default Tuitions;
