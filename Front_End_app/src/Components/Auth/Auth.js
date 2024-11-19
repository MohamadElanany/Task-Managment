import React, { useEffect } from "react";
import {Outlet } from "react-router-dom";

const Auth = () => {
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Auth;
