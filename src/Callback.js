import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate instead of useHistory
import authService from "./authService";

const Callback = () => {
  const navigate = useNavigate(); // useNavigate hook to get the navigate function

  useEffect(() => {
    const handleCallback = async () => {
      await authService.handleCallback();
      navigate("/"); // Use navigate to redirect after successful login
    };

    handleCallback();
  }, [navigate]); // Make sure to include navigate in the dependency array

  return <div>Loading...</div>;
};

export default Callback;
