import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useFetchTeachers = () => {
  const [teachers, setTeachers] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [erorr,setSuccessMsg] = useState(false)

  useEffect(() => {
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
    fetchTeachers();
  }, []);

  return { teachers, loading };
};

export default useFetchTeachers;
