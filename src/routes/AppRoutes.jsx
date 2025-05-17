import { Route } from "react-router";
import { Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Tuitions from "../pages/Tuitions";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Teachers from "../pages/Teachers";
import TuitionDetails from "../components/tuitions/TuitionDetails";
import Profile from "../pages/Profile";
import TeacherProfile from "../components/teacher/details/TeacherProfile";
import AboutUs from "../pages/AboutUs";
import ActivateAcc from "../components/registration/ActivateAcc";
import PaymentSuccess from "../components/payment/PaymentSuccess";
import PaymentCancel from "../components/payment/PaymentCancel";
import PaymentFailed from "../components/payment/PaymentFailed";
import PasswordChange from "../components/profile/ChangePassword";
import ProfileLayout from "../layouts/ProfileLayout";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";
import PhotoUpload from "../components/profile/edit/PhotoUpload";
import EditProfileInfo from "../components/profile/edit/EditProfileInfo";
import AddTuitionForm from "../components/tuitions/form/TuitionForm";
import PrivateRoute from "./PrivateRoute";
import ProvidedTuition from "../components/profile/ProvidedTuition";
import EnrolledTuition from "../components/profile/EnrolledTuition";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="tuitions" element={<Tuitions />} />
        <Route path="tuitions/:Id/" element={<TuitionDetails />} />
        <Route path="tuition-form" element={<AddTuitionForm />} />
        <Route path="payment/success/:id" element={<PaymentSuccess />} />
        <Route path="payment/cancel/" element={<PaymentCancel />} />
        <Route path="payment/failed/" element={<PaymentFailed />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="teachers/:Id" element={<TeacherProfile />} />
        <Route path="registration" element={<Registration />} />
        <Route path="activate/:uid/:token/" element={<ActivateAcc />} />
        <Route path="login" element={<Login />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <ProfileLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path="enrolledTuition" element={<EnrolledTuition />} />
          <Route path="providedTuition" element={<ProvidedTuition />} />
          <Route path="editProfile" element={<EditProfileInfo />} />
          <Route path="upload-img" element={<PhotoUpload />} />
          <Route path="changePassword" element={<PasswordChange />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
