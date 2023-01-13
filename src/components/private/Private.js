import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Private = ({ history }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }

    const Base_URL = "https://backend-mernauth.onrender.com";

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios.get(`${Base_URL}/api/private`, config);
        setPrivateData(data.data);
      } catch (err) {
        localStorage.removeItem("authToken");
        setError("You are not autorized");
      }
      fetchPrivateData();
    };
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return error ? (
    <span>{error}</span>
  ) : (
    <div>
      <div>{privateData}</div>
      <button onClick={logoutHandler}> Logout</button>
    </div>
  );
};

export default Private;
