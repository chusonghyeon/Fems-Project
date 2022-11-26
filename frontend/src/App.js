import React, { useEffect, useState } from "react";
import "./App.css";
import { useStateContext } from "./context/UserContext";
import UnProtectedRoutes from "./Routes/UnProtectedRoutes";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

const App = () => {
  const { token } = useStateContext();
  const [currentRoute, setCurrentRoute] = useState(null);

  // 첫 실행 시 화면 = 토큰 없으면 ? 로그인 페이지 : 있으면 .. 서비스 페이지
  useEffect(() => {
    const currentRoutes =
      token === null ? <UnProtectedRoutes /> : <ProtectedRoutes />;
    setCurrentRoute(currentRoutes);
  }, [token]);

  return (
    <div className="">
      <div className="column is-two_thirds m-0 p-0 w-full h-full">
        {currentRoute}
      </div>
    </div>
  );
};

export default App;
