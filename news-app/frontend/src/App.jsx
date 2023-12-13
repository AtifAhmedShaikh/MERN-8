import React from "react";
import ToastWrapper from "./components/UI/Toast.jsx";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Notifications,
  Settings,
  UserLogin,
  UserSignUp,
} from "./z-point/Point.jsx";
import {
  ArticlesList,
  CompleteArticle,
  SavedArticles,
} from "./z-point/Point.jsx";
import {
  ChannelLogin,
  ChannelProfile,
  ChannelRegister,
  ChannelsList,
} from "./z-point/Point.jsx";
import useAutoLogin from "./hooks/useAutoLogin.js";

function App() {
  useAutoLogin();
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/articles" element={<ArticlesList />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/channels" element={<ChannelsList />} />
        <Route exact path="/channels/:id" element={<ChannelProfile />} />
        <Route exact path="/articles/:id" element={<CompleteArticle />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/saved" element={<SavedArticles />} />
        <Route exact path="/auth/login" element={<UserLogin />} />
        <Route exact path="/auth/signUp" element={<UserSignUp />} />
        <Route exact path="/channels/auth/login" element={<ChannelLogin />} />
        <Route
          exact
          path="/channels/auth/register"
          element={<ChannelRegister />}
        />
      </Routes>
      <ToastWrapper />
    </React.Fragment>
  );
}

export default App;
