import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes.jsx";
import { TuitionProvider } from "./context/TuitionContext.jsx";
import { TeacherProvider } from "./context/TeacherContext.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <TuitionProvider>
          <TeacherProvider>
            <AuthProvider>
              <AppRoutes />
              <ToastContainer
                autoClose={3000}
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
              />
            </AuthProvider>
          </TeacherProvider>
        </TuitionProvider>
      </BlogProvider>
    </BrowserRouter>
  </StrictMode>
);
