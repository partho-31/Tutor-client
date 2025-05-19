import EnrolledStudents from "./details/EnrolledStudents";
import CourseContent from "./details/CourseContent";
import NumberOfClasses from "./details/NumberOfClasses";
import TeacherInfo from "./details/TeacherInfo";
import TuitionHeading from "./details/TuitionHeading";
import CourseContentPhoto from "./details/CourseContentPhoto";
import TuitionInfo from "./details/TuitionInfo";
import PaymentSection from "./details/PaymentSection";
import DetailsAboutCourse from "./details/OutComes";
import TuitionReview from "./reviews/TuitionReview";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import StudentsOfCourse from "./details/StudentsOfCourse";
import useAuthContext from "../../hooks/useAuthContext";

const TuitionDetails = () => {
  let { Id } = useParams();
  const [tuition, setTuition] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTuition = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get(`/api/tuitions/${Id}/`);
        setTuition(res?.data);
      } catch (error) {
        console.log("Fetching tuition error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTuition();
  }, [Id]);

  return (
    <div>
      <div className="bg-gray-50 font-sans">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {loading ? (
            <div className="w-full flex justify-center h-lvh">
              <span className="loading loading-spinner text-info text-6xl"></span>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side - Information Area */}
              <div className="w-full lg:w-1/3 space-y-8 slide-in-left">
                {/* Enrolled Students Count */}
                <EnrolledStudents />
                {/* Course Content */}
                <CourseContent tuition={tuition} />
                {/* Number of Classes */}
                <NumberOfClasses tuition={tuition} />

                {/* Instructor Info */}
                <TeacherInfo tuition={tuition} />
                {/* Student list */}
                <StudentsOfCourse tuition={tuition} />
              </div>

              {/* Right Side - Main Focus Area */}
              <div className="w-full lg:w-2/3 space-y-8 fade-in">
                {/* Heading */}
                <TuitionHeading tuition={tuition} />

                {/* Photo */}
                <CourseContentPhoto tuition={tuition} />

                {/* Tuition short Info */}
                <TuitionInfo tuition={tuition} />

                {/* Salary & Enroll Button */}
                <PaymentSection tuition={tuition} user={user} />

                {/* Tuition Details */}
                <DetailsAboutCourse tuition={tuition} />

                {/* Reviews Section */}
                <TuitionReview tuition={tuition} user={user} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TuitionDetails;
