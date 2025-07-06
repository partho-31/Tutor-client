import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get("api/blogs/");
        setBlogs(res.data);
        return { success: true, massage: "fetching blogs successful" };
      } catch (error) {
        return { success: false, error: error };
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

export default useBlogs;
