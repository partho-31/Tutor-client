import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/"></Navigate>;
};

export default PrivateRoute;
