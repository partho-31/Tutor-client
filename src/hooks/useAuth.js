import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import apiClient from "../services/apiClient";
import authApiClient from "../services/authApiClient";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const getToken = () => {
    const token = localStorage.getItem("authToken");
    return token ? JSON.parse(token) : null;
  };

  const [authToken, setAuthToken] = useState(getToken());
  useEffect(() => {
    if (authToken) getUser();
  }, [authToken]);

  const handleError = (error, defaultMsg = "Something went wrong!") => {
    if (error.response && error.response?.data) {
      const err = Object.values(error.response.data).flat().join("\n");
      setErrorMsg(err);
      return { success: false, message: err };
    }
    setErrorMsg(defaultMsg);
    return { success: false, message: defaultMsg };
  };

  //Registration
  const registration = async (data) => {
    try {
      await apiClient.post("/auth/users/", data);
    } catch (error) {
      return handleError(error, "Registration Failed");
    }
    return { success: "Registration successful" };
  };

  const activeAccViaEmail = async (uid, token) => {
    try {
      await apiClient.post("/auth/users/activation/", { uid, token });
      return { success: true, message: "Account active successful" };
    } catch (error) {
      return { success: false, message: "Activation failed", error: error };
    }
  };

  //Log In
  const login = async (data) => {
    try {
      const response = await apiClient.post("auth/jwt/create/", data);
      setAuthToken(response.data);
      localStorage.setItem("authToken", JSON.stringify(response.data));
      navigate("/");
      return { success: true, message: "Login successful" };
    } catch (error) {
      handleError(error, "Login failed");
    }
  };

  //Fetching User
  const getUser = async () => {
    try {
      const response = await authApiClient.get("/auth/users/me/");
      setUser(response?.data);
    } catch (error) {
      return { success: true, error: error };
    }
    return { success: true, message: "Fetching user successful" };
  };

  //Update user
  const updateUserProfile = async (data) => {
    console.log(data);
    setErrorMsg("");
    try {
      await apiClient.put("/auth/users/me/", data, {
        headers: {
          Authorization: `JWT ${authToken?.access}`,
        },
      });
      return { success: true, message: "User updated successfully" };
    } catch (error) {
      return handleError(error);
    }
  };

  //Log Out
  const logOut = async () => {
    try {
      localStorage.removeItem("authToken");
      setUser(null);
    } catch (error) {
      return handleError(error, "Error in log out");
    } finally {
      navigate("/");
    }
    return { success: true, message: "User sign out successful" };
  };

  return {
    login,
    errorMsg,
    user,
    logOut,
    registration,
    handleError,
    activeAccViaEmail,
    updateUserProfile,
  };
};

export default useAuth;
