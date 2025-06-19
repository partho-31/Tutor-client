import { useForm } from 'react-hook-form';
import authApiClient from '../../../services/authApiClient';
import StarRating from './StarRating';

const ReviewForm = ({tuition,fetchReview,user}) => {
    const {
        register,
        handleSubmit, 
        formState: { errors, isSubmitting },
        reset,
        setValue,
        watch
      } = useForm();

    const onSubmit = async (fromData) => {
    try {
      await authApiClient.post(`api/tuitions/${tuition.id}/reviews/`, fromData);
      reset();
      alert('Review submitted!')
      await fetchReview();
    } catch (error) {
      console.log("Error in submitting review", error);
    }
  };

  const rating = watch('rating',0)

    return (
        <div>
             <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-lg font-medium mb-4">Leave Your Review</h4>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-gray-700 mb-2">Your Rating</label>
                <StarRating onChange={(value)=> setValue('rating',value)} rating={rating} />
                <input
                  type="number"
                  {...register("rating", {
                    required: true,
                    validate: (value) =>
                      (value < 6 && value > 0) ||
                      "Rating must be less then or equal to 5!",
                  })}
                  placeholder="e.g. 1 to 5"
                  className="hidden w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
    );
};

export default ReviewForm;