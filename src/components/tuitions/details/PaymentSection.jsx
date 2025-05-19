import { useEffect, useState } from "react";
import authApiClient from "../../../services/authApiClient";

const PaymentSection = ({ tuition, user }) => {
  const [loading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const check = user?.applied_tuition?.some(
      (obj) => obj.details.id === tuition.id
    );
    setIsEnrolled(check);
  }, [user, tuition.id]);

  const discount = tuition.fee * (20 / 100);
  const fee = tuition.fee - discount;

  const handleClick = () => {
    const payment = async () => {
      setLoading(true);
      try {
        const res = await authApiClient.post("/api/payment/initiate", {
          amount: fee,
          tuition_id: tuition.id,
        });
        if (res.data.payment_url) {
          window.location.href = res.data.payment_url;
        }
      } catch (error) {
        console.log("Payment error", error);
      } finally {
        setLoading(false);
      }
    };
    payment();
  };

  return (
    <div>
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <p className="text-gray-600">Course Price</p>
            <div className="flex items-baseline space-x-2">
              <p className="text-3xl font-bold text-blue-800">
                {isNaN(fee) ? "0" : fee}
              </p>
              <p className="text-sm text-gray-500 line-through">
                {tuition.fee}
              </p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                20.00% OFF
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Limited time offer</p>
          </div>

          {isEnrolled ? (
            <button
              onClick={handleClick}
              className="enroll-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 "
            >
              Already Enrolled
            </button>
          ) : (
            <button
              onClick={handleClick}
              disabled={!user}
              className="enroll-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 "
            >
              {loading ? "Processing.." : "Enroll Now"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
