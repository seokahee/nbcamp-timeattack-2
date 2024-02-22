import React from "react";
import { Link, Outlet } from "react-router-dom";

function NonAuthLayout() {
  return (
    <div>
      <Link to="/login">LoginPage</Link> <br />
      <Link to="/signup">SignupPage</Link>
      <Outlet />
    </div>
  );
}

export default NonAuthLayout;
