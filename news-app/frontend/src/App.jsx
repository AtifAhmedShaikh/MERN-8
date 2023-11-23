import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Articles from "./Pages/Articles";
import Notifications from "./Pages/Notifications";
import ChannelsList from "./Pages/ChannelsList";
import Settings from "./Pages/Settings";
import LoginUser from "./Pages/auth/Login";
import SignUpUser from "./Pages/auth/SignUp";
import LoginChannel from "./Pages/channel-auth/Login";
import RegisterChannel from "./Pages/channel-auth/Register";
import ChannelProfile from "./Pages/ChannelProfile";
import CompleteArticle from "./Pages/CompleteArticle";
import SavedArticles from "./Pages/SavedArticles";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/channels/all" element={<ChannelsList />} />
        <Route path="/channels/:id" element={<ChannelProfile />} />
        <Route path="/articles/:id" element={<CompleteArticle />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/saved" element={<SavedArticles/>} />
        <Route path="/auth/login" element={<LoginUser />} />
        <Route path="/auth/signUp" element={<SignUpUser />} />
        <Route path="/channels/auth/login" element={<LoginChannel />} />
        <Route path="/channels/auth/register" element={<RegisterChannel />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
