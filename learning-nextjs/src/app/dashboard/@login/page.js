"use client";
import React from "react";
const Login = ({ handleLogin }) => {
  return (
    <div>
      <p>please login to continue</p>
      <button
        title="login?"
        onClick={handleLogin}
        className="bg-lime-300 mt-2 p-2 px-4 rounded-lg ml-4"
      >
        login
      </button>
    </div>
  );
};

export default Login;
