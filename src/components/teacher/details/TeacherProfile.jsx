import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import ProfileHeader from "../profile/ProfileHeader";
import TeacherInfo from "../profile/TeacherInfo";
import AboutTeacher from "../profile/AboutTeacher";
import CoursesOfTeacher from "../profile/CoursesOfTeacher";
import Qualification from "../profile/Qualification";
import SocialMediaLink from "../profile/SocialMediaLink";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiClient from "../../../services/apiClient";

const TeacherProfile = () => {
  const [teacher, setTeacher] = useState("");
  const [loading, setLoading] = useState(false);

  const { Id } = useParams();

  useEffect(() => {
    const fetchTeacher = async () => {
      setLoading(true);
      try {
        const res = await apiClient.get(`/api/teachers/${Id}/`);
        setTeacher(res.data);
      } catch (error) {
        console.log("Fetching teacher error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeacher();
  }, [Id]);
  console.log(teacher);
  console.log(Id);
  return (
    <div className="mt-5">
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info text-6xl"></span>
        </div>
      ) : (
        <div className="bg-gray-50 font-sans">
          {/* Header Section */}
          <ProfileHeader teacher={teacher} />

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar */}
              <div className="lg:w-1/3">
                {/* Personal Information Card */}
                <TeacherInfo teacher={teacher} />

                {/* Social Media Card */}
                <SocialMediaLink />
              </div>

              {/* Right Main Content */}
              <div className="lg:w-2/3">
                {/* Biography Section */}
                <AboutTeacher teacher={teacher} />
                {/* Courses Section */}
                <CoursesOfTeacher teacher={teacher} />

                {/* Qualifications Section */}

                <Qualification teacher={teacher} />
                {/* Achievements Section */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    Achievements & Recognition
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <FaTrophy
                        className="text-yellow-500 mt-1 mr-3"
                        size={16}
                      />
                      <div>
                        <p className="font-medium">
                          Excellence in Teaching Award
                        </p>
                        <p className="text-gray-600 text-sm">
                          State University, 2020
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <FiAward
                        className="text-indigo-500 mt-1 mr-3"
                        size={16}
                      />
                      <div>
                        <p className="font-medium">
                          Outstanding Research Contribution
                        </p>
                        <p className="text-gray-600 text-sm">
                          Mathematical Association, 2018
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <FaAward className="text-green-500 mt-1 mr-3" size={16} />
                      <div>
                        <p className="font-medium">
                          Curriculum Development Grant
                        </p>
                        <p className="text-gray-600 text-sm">
                          National Science Foundation, 2016
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <FaMedal className="text-red-500 mt-1 mr-3" size={16} />
                      <div>
                        <p className="font-medium">Student Choice Professor</p>
                        <p className="text-gray-600 text-sm">
                          Student Association, 2019 & 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default TeacherProfile;
