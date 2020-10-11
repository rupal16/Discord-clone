import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
