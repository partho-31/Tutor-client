import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useFetchTuitions = () => {
  const [tuitions, setTuitions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchBySub, setSearchBySub] = useState("");
  const [searchByClass, setSearchByClass] = useState("");
  const [searchByTeacher, setSearchByTeacher] = useState("");

  useEffect(() => {
    const fetchTuitions = async () => {
      setLoading(true);
      const url = `api/tuitions/?subjects=${searchBySub}&classes=${searchByClass}&teacher=${searchByTeacher}`;
      try {
        const res = await apiClient.get(url);
        setTuitions(res.data);
      } catch (error) {
        console.log("Fetching tuitions error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTuitions();
  }, [searchBySub, searchByClass, searchByTeacher]);

  return {
    tuitions,
    loading,
    searchBySub,
    setSearchBySub,
    searchByClass,
    setSearchByClass,
    searchByTeacher,
    setSearchByTeacher,
  };
};

export default useFetchTuitions;
