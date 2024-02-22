import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/search">searchPage</Link> <br />
      <Link to="/testPage">testPage</Link>
      <Outlet />
    </div>
  );
}

export default Layout;
