import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
// import Table from "./components/Table";

import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import Routeing from "./Routes/Routeing";

const App = () => {
  const [message, setMessage] = useState("");
  const [token] = useContext(UserContext);
  const [currentRoute, setCurrentRoute] = useState(null);

  useEffect(() => {
    const currentRoutes = token === null ? <ProtectedRoutes /> : <Routeing />;
    setCurrentRoute(currentRoutes);
  }, [token]);

  return (
    <div>
      <div>
        {/* <Header title={message} /> */}
        <div className="column is-two_thirds m-5">{currentRoute}</div>
      </div>
    </div>
  );
};

export default App;
