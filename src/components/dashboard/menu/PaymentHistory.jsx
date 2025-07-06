import { useEffect, useState } from "react";
import authApiClient from "../../../services/authApiClient";

const PaymentHistory = () => {
  const [payments, setPayment] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchPaymentHistory = async () => {
      setLoading(true);
      try {
        const res = await authApiClient.get("api/payment_history/");
        setPayment(res.data);
      } catch (error) {
        console.log("Error while fetching Payment history", error);
      } finally {
        setLoading(false);
      }
    };
    FetchPaymentHistory();
  }, []);

  return (
    <div className="flex-1 mx-auto">
      <div className="text-xl sm:text-3xl sm:pl-2 pb-4 font-bold mb-6 text-gray-600 border-b-2 border-indigo-200 ">
        Payment History
      </div>
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 sm:mx-3">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-700 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold border-b border-gray-200">
                    Transaction ID
                  </th>
                  <th className="py-4 px-6 text-center font-semibold border-b border-gray-200">
                    Tuition Title
                  </th>
                  <th className="py-4 px-6 text-center font-semibold border-b border-gray-200">
                    Amount (BDT)
                  </th>
                  <th className="py-4 px-6 text-center font-semibold border-b border-gray-200">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {payments.map((payment, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap border-r border-gray-100">
                      <span className="font-medium text-gray-500">
                        {payment.tran_id}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center font-medium text-gray-500">
                      {payment.tuition.title}
                    </td>
                    <td className="py-3 px-6 text-center font-medium text-green-600 border-r border-gray-100">
                      {payment.amount} TK
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-blue-50 text-blue-700 py-1 px-3 rounded-full text-xs">
                        {new Date(payment.created_at).toLocaleDateString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 p-4">
            {payments.map((payment) => (
              <div
                key={payment.tran_id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-indigo-600 text-sm">
                    {payment.tran_id}
                  </span>
                  <span className="bg-blue-50 text-blue-700 py-1 px-2 rounded-full text-xs">
                    {new Date(payment.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="text-gray-700 mb-1">
                  {payment.tuition.title}
                </div>
                <div className="font-medium text-green-600 text-right">
                  ৳{payment.amount}
                </div>
              </div>
            ))}
          </div>

          {payments.length === 0 && (
            <div className="py-8 text-center text-gray-500 italic">
              No payment history available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
