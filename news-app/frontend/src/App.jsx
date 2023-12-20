import React from "react";
import ToastWrapper from "./components/UI/Toast.jsx";
import Router from "./router/Router.jsx";

function App() {
  return (
    <React.Fragment>
      <Router />
      <ToastWrapper />
    </React.Fragment>
  );
}

export default App;
