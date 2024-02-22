import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function AuthLayout() {
  navigator = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용해 주세요");
      navigator();
    }
  });
  return (
    <div>
      <Link to="/userProfilePage">UserProfile</Link>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
