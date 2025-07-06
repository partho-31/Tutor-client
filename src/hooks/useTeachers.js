import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useTeachers = () => {
  const [teachers, setTeachers] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTeachers = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get("api/teachers/");
      setTeachers(res.data);
      return { success: false, message: "Fetching teachers successful" };
    } catch (error) {
      return { success: false, error: error };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  return { teachers, loading, fetchTeachers };
};

export default useTeachers;
