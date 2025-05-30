import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useFetchStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchStudents = async () => {
    setloading(true);
    try {
      const res = await apiClient.get("api/students/");
      setStudents(res.data);
    } catch (error) {
      console.log("Error while fetching students", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return { students, loading, fetchStudents };
};

export default useFetchStudents;
