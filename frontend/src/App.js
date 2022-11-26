import React, { useEffect, useState } from "react";
import "./App.css";
import { useStateContext } from "./context/UserContext";
import UnProtectedRoutes from "./Routes/UnProtectedRoutes";
import ProtectedRoutes from "./Routes/ProtectedRoutes";

const App = () => {
  const { token, currentMode } = useStateContext();
  const [currentRoute, setCurrentRoute] = useState(null);

  useEffect(() => {
    const currentRoutes =
      token === null ? <UnProtectedRoutes /> : <ProtectedRoutes />;
    setCurrentRoute(currentRoutes);
  }, [token]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="column is-two_thirds m-5">{currentRoute}</div>
      </div>
    </div>
  );
};

export default App;
