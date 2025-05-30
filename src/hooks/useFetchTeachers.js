import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useFetchTeachers = () => {
  const [teachers, setTeachers] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchTeachers = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get("api/teachers/");
      setTeachers(res.data);
    } catch (error) {
      console.log("Fetching teacher error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return { teachers, loading, fetchTeachers };
};

export default useFetchTeachers;
