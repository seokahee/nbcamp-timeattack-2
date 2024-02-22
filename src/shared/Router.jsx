import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import TestPage from "../pages/TestPage";
import LoginPage from "../pages/non-auth/LoginPage";
import SignupPage from "../pages/non-auth/SignupPage";
import NotFound from "../pages/default-set/NotFount";
import UserProfilePage from "../pages/auth/UserProfilePage";
import NonAuthLayout from "../components/layout/NonAuthLayout";
import AuthLayout from "../components/layout/AuthLayout";

export default function RouterPage() {
  const [isLogin, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 여부 상관없는 라우터 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/testPage" element={<TestPage />} />
        </Route>

        {/* 로그인 상태가 아니여야하는 라우터 */}
        {!isLogin ? (
          <Route element={<NonAuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        ) : (
          {
            /* 로그인 상태 */
          }(
            <Route element={<AuthLayout />}>
              <Route path="/user/:userId" element={<UserProfilePage />} />
              {/* <Route path="/user/:userId" element={<UserProfile />} /> */}
            </Route>
          )
        )}

        {/* 404 Not Found */}
        <Route path="notFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
