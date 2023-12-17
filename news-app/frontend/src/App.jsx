import React from "react";
import ToastWrapper from "./components/UI/Toast.jsx";
import useAutoLogin from "./hooks/useAutoLogin.js";
import Router from "./router/Router.jsx";

function App() {
  useAutoLogin();
  return (
    <React.Fragment>
      <Router />
      <ToastWrapper />
    </React.Fragment>
  );
}

export default App;
