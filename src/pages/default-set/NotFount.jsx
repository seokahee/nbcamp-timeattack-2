import React from "react";
import { Outlet } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Outlet />
    </div>
  );
};

export default NotFound;
