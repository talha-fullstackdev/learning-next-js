"use client";
import React from "react";
// import UserAnalytics from './@useranalytics/page'
// import Reveneue from './@reveneue/page'
// import Notifications from './@notifications/page'
import { useState } from "react";
import Login from "./@login/page";
const layout = ({ children, notifications, reveneue, useranalytics }) => {
  // we can also get routes like this without import
  const [login, setLogin] = useState(false);
  const styles =
    "w-[200px] h-[200px]  text-center pt-20 text-xl font-semibold rounded-lg";
  const handleLogin = () => {
    setLogin(true);
    alert("login success");
  };
  const handleLogout = () => {
    setLogin(false);
    alert("logout success");
  };
  return login ? (
    <div>
      <h1 className="text-2xl font-bold">header dashboard</h1>
      {children}
      <div className="flex gap-10 mt-10 ml-10 mb-10 ">
        <div className={`${styles} bg-lime-200`}>{notifications}</div>
        <div className={`${styles} bg-blue-200`}>{reveneue}</div>
        <div className={`${styles} bg-red-200`}> {useranalytics}</div>
      </div>
      <button
        title="logout?"
        className="bg-lime-300 mt-2 p-2 px-4 rounded-lg ml-4"
        onClick={handleLogout}
      >
        logout
      </button>

      {/* <UserAnalytics/>
        <Reveneue/>
        <Notifications/> */}
      <h1 className="text-2xl font-bold">Footer dashboard</h1>
    </div>
  ) : (
    <Login handleLogin={handleLogin} />
  );
};

export default layout;
