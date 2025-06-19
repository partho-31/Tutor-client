import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaTrash } from "react-icons/fa";
import authApiClient from "../../../services/authApiClient";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await authApiClient.get("api/contact/");
        setMessages(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchMessages();
  }, [messages.length]);

  const handleDelete = async (id) => {
    try {
        await authApiClient.delete(`/api/contact/${id}/`);
        fetchMessages()
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <div className="flex-1 p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Contact Messages</h2>
      </div>

      {/* Messages Grid */}
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="m-3 md:m-8">
          {messages?.map((message)=> (
            <div className="letter-card w-full bg-white rounded-lg shadow-md mb-6 p-6 relative " key={message.id}>
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {message.name}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <FaEnvelope className="text-gray-400 mt-1 mr-2" />
                <span className="text-gray-700">{message.email}</span>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-gray-400 mt-1 mr-2" />
                <span className="text-gray-700">{message.phone}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 italic">
                {message.message}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="mt-4 text-xs text-gray-400 flex justify-end">
                {new Date(message.date).toLocaleDateString()} 
              </div>
              <button
                onClick={() => handleDelete(message.id)}
                className=" text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactMessages;
