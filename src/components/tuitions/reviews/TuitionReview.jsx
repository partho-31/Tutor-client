import { useForm } from "react-hook-form";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import authApiClient from "../../../services/authApiClient";
import { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";

const TuitionReview = ({ tuition, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaderForDel, setLoaderForDel] = useState(false);
  

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get(`/api/tuitions/${tuition?.id}/reviews/`);
      setReviews(res.data);
    } catch (error) {
      console.log("Error while fetching reviews", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleReviewDelete = async (id) => {
    setLoaderForDel(true);
    try {
      await authApiClient.delete(`api/tuitions/${tuition.id}/reviews/${id}/`);
    } catch (error) {
      console.log("Error while deleting reviews", error);
    } finally {
      setLoaderForDel(false);
      fetchReviews();
    }
  };

  const onSubmit = async (fromData) => {
    try {
      await authApiClient.post(`api/tuitions/${tuition.id}/reviews/`, fromData);
      reset();
      fetchReviews();
    } catch (error) {
      console.log("Error in submitting review", error);
    }
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          Student Reviews
        </h3>

        <div className="space-y-6">
          {/* Review 1 */}
          <div className="review-card bg-gray-50 p-5 rounded-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Student"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <div className="flex items-center">
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              "This course completely changed my perspective on math. The
              instructor explains complex concepts in a way that's easy to
              understand. The problem sets were challenging but extremely
              rewarding."
            </p>
          </div>
          {/* Dynamic Review  */}
          {loading ? (
            <div className="w-full flex justify-center">
              <span className="loading loading-spinner text-info text-6xl"></span>
            </div>
          ) : (
            ""
          )}

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
                {loaderForDel ? (
                  <span className="loading loading-spinner text-error"></span>
                ) : user ? (
                  <button
                    className="btn btn-soft btn-error"
                    onClick={() => handleReviewDelete(review.id)}
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}

          {/* Review Form */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-medium mb-4">Leave Your Review</h4>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-gray-700 mb-2">Your Rating</label>
                <input
                  type="number"
                  {...register("rating", {
                    required: true,
                    validate: (value) =>
                      (value < 6 && value > 0) ||
                      "Rating must be less then or equal to 5!",
                  })}
                  placeholder="e.g. 1 to 5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                {errors.rating && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.rating.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Review</label>
                <textarea
                  rows="4"
                  {...register("comment")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !user}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
              >
                {isSubmitting ? "Sub/mitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionReview;
