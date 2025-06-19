import { useState } from "react";
import authApiClient from "../../services/authApiClient";

const DeleteBtnReview = ({ review, tuition_id, handleFetch, user }) => {
  const [spiner, setSpiner] = useState(false);
  
  const handleDelete = async () => {
    setSpiner(true);
    try {
      await authApiClient.delete(
        `api/tuitions/${tuition_id}/reviews/${review.id}/`
      );
      await handleFetch();
    } catch (error) {
      console.log("Error while deleting", error);
    } finally {
      setSpiner(false);
    }
  };

  return (
    <div>
      {review.user.id === user.id ? (
        spiner ? (
          <span className="loading loading-spinner text-error"></span>
        ) : (
          <button
            className="btn btn-soft btn-error"
            onClick={() => handleDelete(review.id)}
          >
            Delete
          </button>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default DeleteBtnReview;
