import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <div>
      <h1>Signup</h1>
      <p>Signup page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const result = await axios.post(
              "https://moneyfulpublicpolicy.co.kr/register",
              {
                id: id,
                password: password,
                nickname: nickname,
              }
            );
            alert("회원가입에 성공하였습니다. 로그인 페이지로 이동할게요");
            navigate("/login");
            console.log("result", result);
          } catch (error) {
            console.log("error", error);
            alert(error.response.data.message);
          }
        }}
      >
        <div>
          <label htmlFor="id">id</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nickname">nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하러가기
        </button>

        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
