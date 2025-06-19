import { RiStarFill, RiStarLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";
import ReviewForm from "./ReviewForm";
import DeleteBtnReview from "../../button/DeleteBtnReview";

const TuitionReview = ({ tuition, user }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const res = await apiClient.get(`/api/tuitions/${tuition?.id}/reviews/`);
      setReviews(res.data);
    } catch (error) {
      console.log("Error while fetching reviews", error);
    } 
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          Student Reviews
        </h3>

        <div className="space-y-6"> 
          {reviews.length === 0 && (<span className="text-gray-400 font-bold">No review available</span>)}
          {reviews.map((review, index) => (
            <div
              className="review-card bg-gray-50 p-5 rounded-lg border border-gray-100 relative"
              key={index}
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={review.user.profile_info.image}
                  alt="Student"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-medium">
                    {review.user.first_name} {review.user.last_name}
                  </p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < review.rating ? (
                        <RiStarFill key={i} className="text-yellow-400" />
                      ) : (
                        <RiStarLine key={i} className="text-gray-300" />
                      )
                    )}
                  </div>
                </div>

                {/* Delete Button */}
                <DeleteBtnReview review={review} tuition_id={tuition.id} handleFetch={fetchReviews} user={user} />
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}

          {/* Review Form  */}
          <ReviewForm
            tuition={tuition}
            fetchReview={fetchReviews}
            user={user}
          />
        </div>
      </div>
  );
};

export default TuitionReview;
