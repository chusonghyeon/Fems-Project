import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useStateContext } from "../context/UserContext";

// 로그인 정보
const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setToken } = useStateContext();

  // 로그인 정보 백으로 보내고 토큰 받아오기
  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${id}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };
    const response = await fetch("/login", requestOptions);
    const data = await response.json();

    // 백에서 받아온 에러 메세지
    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  // 로그인 시도
  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };
  //  이미지 https://tailwindcss.com/docs/background-image

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      {/* 로그인 외부 창 */}
      <div className="bg-slate-100 h-96 w-96 flex justify-center items-center relative rounded-3xl">
        {/* 로그인 내부 창 */}
        <div className="backdrop-blur-sm">
          {/* 타이틀 */}
          <div className="absolute top-10 left-36">
            <h1>FEMS 로그인</h1>
          </div>
          <div className="flex m-10 p-3">
            {/* 로그인 폼 */}
            <form
              className="flex flex-col items-center m-10"
              onSubmit={handleSubmit}
            >
              {/* ID(사번) */}
              <div className="m-5">
                <label>사번</label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="input rounded-lg w-80 h-8 p-3 m-3"
                    required
                  />
                </div>
              </div>
              {/* 패스워드 */}
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input rounded-lg w-80 h-8 p-3 m-3"
                    required
                  />
                </div>
              </div>
              {/* 아이디 비번 틀릴 시 틀리면 에러메세지 */}
              <ErrorMessage message={errorMessage} />
              <br />
              {/* 로그인 버튼 */}
              <button
                className="button is-primary border-solid rounded-xl border-blue-500 border-1 px-5 py-1 mt-5"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
