import { Route } from "react-router";
import { Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Tuitions from "../pages/Tuitions";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Teachers from "../pages/Teachers";
import TuitionDetails from "../components/tuitions/TuitionDetails";
import TeacherProfile from "../components/teacher/details/TeacherProfile";
import AboutUs from "../pages/AboutUs";
import ActivateAcc from "../components/registration/ActivateAcc";
import PaymentSuccess from "../components/payment/PaymentSuccess";
import PaymentCancel from "../components/payment/PaymentCancel";
import PaymentFailed from "../components/payment/PaymentFailed";
import DashboardLayout from "../layouts/DashboardLayout";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";
import ChangePassword from "../components/dashboard/menu/ChangePassword";
import PhotoUpload from "../components/profile/edit/PhotoUpload";
import EditProfileInfo from "../components/profile/edit/EditProfileInfo";
import AddTuitionForm from "../components/tuitions/form/TuitionForm";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard";
import Profile from "../components/profile/main_page/Profile";
import PaymentHistory from "../components/dashboard/menu/PaymentHistory";
import StudentList from "../components/dashboard/menu/StudentList";
import TeachersList from "../components/dashboard/menu/TeachersList";
import BlogLayout from "../pages/Blog";
import AddBlogForm from "../components/blog/addBlog/AddForm";
import ContactUs from "../pages/ContactUs";
import BlogPost from "../components/blog/main_page/BlogPost";
import ContactMessages from "../components/contact/messages/ContactMessages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="activate/:uid/:token/" element={<ActivateAcc />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />

        <Route path="teachers" element={<Teachers />} />
        <Route path="teachers/:Id" element={<TeacherProfile />} />
        <Route path="courses" element={<Tuitions />} />
        <Route path="courses/:Id/" element={<TuitionDetails />} />
        <Route path="payment/success/:id" element={<PaymentSuccess />} />
        <Route path="payment/failed/" element={<PaymentFailed />} />
        <Route path="payment/cancel/" element={<PaymentCancel />} />
        <Route path="blog" element={<BlogLayout />} />
        <Route path="blog/:Id" element={<BlogPost />} />
      </Route>

      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/editProfile" element={<EditProfileInfo />} />
        <Route path="profile/upload-img" element={<PhotoUpload />} />
        <Route path="paymetHistory" element={<PaymentHistory />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="studentsList" element={<StudentList />} />
        <Route path="teachersList" element={<TeachersList />} />
        <Route path="contact/messages" element={<ContactMessages />} />
        <Route path="courses-form" element={<AddTuitionForm />} />
        <Route path="blog/addBlog" element={<AddBlogForm />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
