import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useTuitions = () => {
  const [tuitions, setTuitions] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTuitions = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get('api/tuitions/');
        setTuitions(res.data);
      } catch (error) {
        console.log("Fetching tuitions error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTuitions();
  }, [tuitions?.results.length]);

  return {
    tuitions,
    loading,
  };
};

export default useTuitions;
