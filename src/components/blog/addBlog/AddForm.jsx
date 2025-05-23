import { useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../../../services/authApiClient";

const AddBlogForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [previewImage, setPreviewImage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("heading", data.heading);
    formData.append("topic", data.topic);
    formData.append("description", data.description);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const res = await authApiClient.post("api/blogs/", formData);
      console.log(res.data);
      reset();
    } catch (error) {
      console.log("Error submitting blog", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Create New Blog
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Fill in the details to add a new Blog
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Heading/Title
              </label>
              <input
                type="text"
                {...register("heading", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.title
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
              />
              {errors.heading && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide a heading
                </p>
              )}
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description", { required: true })}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.description
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide a description
                </p>
              )}
            </div>

            {/* Topic */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Topic/Subject
              </label>
              <input
                type="text"
                {...register("topic", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.topic
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
              />
              {errors.topic && (
                <p className="mt-1 text-sm text-red-600">
                  Please specify target topic
                </p>
              )}
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Image <span className="text-red-500">*</span>
              </label>
              <div
                className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg ${
                  errors.image ? "border-red-300" : "border-gray-300"
                } hover:border-indigo-400 transition-colors`}
              >
                <div className="space-y-1 text-center">
                  {previewImage ? (
                    <div>
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="h-32 w-full object-contain rounded-md mb-2"
                      />
                    </div>
                  ) : (
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div className="flex flex-col text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                    >
                      <h3 class="text-md font-medium text-blue-700 mb-2">
                        Click To Upload
                      </h3>

                      <div class="px-3 py-1 bg-blue-100 rounded-full">
                        <span class="text-xs font-medium text-blue-700">
                          Max file size: 4MB
                        </span>
                      </div>

                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        {...register("image", {
                          required: true,
                          onChange: (e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const previewUrl = URL.createObjectURL(file);
                              setPreviewImage(previewUrl);
                            }
                          },
                        })}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>
              </div>
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">
                  Please select an image
                </p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${
                isSubmitting
                  ? "bg-indigo-400"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Create Post"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogForm;
