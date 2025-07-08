import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import authApiClient from "../services/authApiClient";

const useTuitions = () => {
  const [tuitions, setTuitions] = useState(null);
  const [loading, setLoading] = useState(false);

  const [payments, setPayment] = useState([]);

  useEffect(() => {
    const FetchPaymentHistory = async () => {
      try {
        const res = await authApiClient.get("api/payment_history/");
        setPayment(res.data);
      } catch (error) {
        return {success: false, message: "Failed to fetch payment_history", error:error}
      }
    };
    FetchPaymentHistory();
  }, []);

  useEffect(() => {
    const fetchTuitions = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get("api/tuitions/");
        setTuitions(res.data);
        return { success: false, message: "Fetching tuitions successful" };
      } catch (error) {
        return { success: false, error: error };
      } finally {
        setLoading(false);
      }
    };

    fetchTuitions();
  }, [tuitions?.length]);

  return {
    tuitions,
    payments,
    loading,
  };
};

export default useTuitions;
