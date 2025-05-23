import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
//   const [searchByTopic, setSearchByTopic] = useState("");
//   const [searchByHeading, setSearchByHeading] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get('api/blogs/');
        setBlogs(res.data);
      } catch (error) {
        console.log("Fetching tuitions error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return {
    blogs,
    loading,
  };
};

export default useFetchBlogs;
