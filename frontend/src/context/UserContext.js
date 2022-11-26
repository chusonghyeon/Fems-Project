// context hooks , redux 역할 , 전체에 토큰인증?

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const UserContext = createContext();

// 차트페이지에서 추가
const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

// 토큰인증
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("awesomeToken"));

  // -------------------------------------

  // 차트페이지에서 추가
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState); // 초깃값 default
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true }); // 모두 기본 false , 클릭하면 true로 바꿔져
  };

  // -------------------------------------

  // 메인페이지에서 요청할 토큰 정보
  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch("/User", requestOptions); // 아까 생성한 토큰 키 있는 아이디 가져오기

      // 처음에는 null값이 들어가있는듯 xx

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("awesomeToken", token);
    };
    fetchUser();
  }, [token]); // 토큰이 업데이트 될때마다

  // 여기가 메인이고 토큰값을 props로 하위 컴포넌트에 전달하는 듯
  return (
    <UserContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// // 컨텍스트 원하는 컨텍스트 반환, 우리는 상태를 지정
export const useStateContext = () => useContext(UserContext);
