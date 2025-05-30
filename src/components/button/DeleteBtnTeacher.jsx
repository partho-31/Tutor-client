import { useState } from "react";
import authApiClient from "../../services/authApiClient";

const DeleteBtnTeacher = ({ id, handleFetch }) => {
  const [spiner, setSpiner] = useState(false);

  const handleDelete = async () => {
    setSpiner(true);
    try {
      await authApiClient.delete(`/api/teachers/${id}/`);
      alert("Deletation successful!");
    } catch (error) {
      console.log("Error while deleting", error);
    } finally {
      setSpiner(false);
      handleFetch();
    }
  };

  return (
    <div>
      {spiner ? (
        <span className="loading loading-spinner text-error"></span>
      ) : (
        <button
          className="btn btn-soft btn-error"
          onClick={() => handleDelete(id)}
        >
          {" "}
          Delete
        </button>
      )}
    </div>
  );
};

export default DeleteBtnTeacher;
