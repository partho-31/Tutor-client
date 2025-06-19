import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";


const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async (id) => {
    try {
      const res = await apiClient.get(`/api/tuitions/${id}/reviews/`);
      setReviews(res.data);
    } catch (error) {
      console.log("Error while fetching reviews", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return { reviews, fetchReviews };
};

export default useFetchReviews;
