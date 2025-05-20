import { useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../../../services/authApiClient";

const EditTuitionFrom = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [previewImage, setPreviewImage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("classes", data.classes);
    formData.append("subjects", data.subjects);
    formData.append("availability", data.availability);
    formData.append("sub_title", data.sub_title);
    formData.append("duration", data.duration);
    formData.append("course_content", data.course_content);
    formData.append("fee", data.fee);
    formData.append("outcomes", data.outcomes);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const res = await authApiClient.post("api/tuitions/", formData);
      console.log(res.data);
      reset();
    } catch (error) {
      console.error("Error submitting tuition:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Create New Tuition Course
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Fill in the details to add a new tuition offering
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Title */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.title
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="Advanced Mathematics Course"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide a course title
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
                placeholder="Comprehensive course covering all major topics..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide a description
                </p>
              )}
            </div>

            {/* Classes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Target Classes <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("classes", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.classes
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="e.g. 9-12, College"
              />
              {errors.classes && (
                <p className="mt-1 text-sm text-red-600">
                  Please specify target classes
                </p>
              )}
            </div>

            {/* Subjects */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subjects <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("subjects", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.subjects
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="e.g. Math, Physics"
              />
              {errors.subjects && (
                <p className="mt-1 text-sm text-red-600">
                  Please list subjects
                </p>
              )}
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <input
                type="text"
                {...register("availability")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. Weekdays, Weekends"
              />
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

            {/* Sub Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subtitle <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("sub_title", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.sub_title
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="e.g. Master Calculus in 12 Weeks"
              />
              {errors.sub_title && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide a subtitle
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                {...register("duration")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g. 3 months, 36 hours"
              />
            </div>

            {/* Course Content */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Content <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("course_content", { required: true })}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.course_content
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="Detailed syllabus and topics covered..."
              />
              {errors.course_content && (
                <p className="mt-1 text-sm text-red-600">
                  Please provide course content
                </p>
              )}
            </div>

            {/* Fee - Updated for BDT only */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Fee (BDT)
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">৳</span>
                </div>
                <input
                  type="number"
                  {...register("fee", {
                    valueAsNumber: true,
                    validate: (value) =>
                      Number.isInteger(value) || "Fee must be a whole number",
                  })}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 py-3 border-gray-300 rounded-lg"
                  placeholder="e.g. 5000"
                  step="1"
                  min="0"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">BDT</span>
                </div>
              </div>
              {errors.fee && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fee.message || "Please enter a valid fee amount"}
                </p>
              )}
            </div>

            {/* Outcomes */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Learning Outcomes <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("outcomes", { required: true })}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.outcomes
                    ? "border-red-300 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-500"
                } focus:outline-none focus:ring-2`}
                placeholder="What students will achieve after completing this course..."
              />
              {errors.outcomes && (
                <p className="mt-1 text-sm text-red-600">
                  Please describe learning outcomes
                </p>
              )}
            </div>
          </div>

          <div className="pt-4">
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
                "Create Course"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTuitionFrom;
