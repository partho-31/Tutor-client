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
    <div className="flex-1 mx-auto">
      <div className="text-xl sm:text-3xl sm:pl-3 pb-4 font-bold mb-6 text-gray-600 border-b-2 border-indigo-200 ">
        Contact messages
      </div>

      {/* Messages Grid */}
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="m-3 sm::m-8">
          {messages?.map((message)=> (
            <div className="letter-card w-full bg-white rounded-lg shadow-md mb-6 p-6 relative " key={message.id}>
            <div className="mb-2 sm:mb-4">
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {message.name}
                </h3>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start">
                <FaEnvelope className="text-gray-400 mt-1 mr-2" />
                <span className="text-gray-700">{message.email}</span>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-gray-400 mt-1 mr-2" />
                <span className="text-gray-700">{message.phone}</span>
              </div>
            </div>

            <div className="mt-2 sm:mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 italic">
                {message.message}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="mt-3 sm:mt-4 text-xs text-gray-400 flex justify-end">
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
