import React, { useEffect } from "react";
import { useParams } from "react-router";
import authApiClient from "../../services/authApiClient";
import useAuthContext from "../../hooks/useAuthContext";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const { id } = useParams();

  const { user } = useAuthContext();
  useEffect(() => {
    const enrolledTuition = async () => {
      try {
        await authApiClient.get(`api/tuitions/${id}/apply_for_tuition/`);
      } catch (error) {
        console.log("Enroll problem", error);
      }
    };

    const selectStudent = async () => {
      try {
        await authApiClient.get(
          `/api/tuitions/${id}/applicants/${user.id}/select_student/`
        );
      } catch (error) {
        console.log("Error in selecting student", error);
      }
    };
    enrolledTuition();
    selectStudent();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <FaCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Your transaction was completed successfully.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
