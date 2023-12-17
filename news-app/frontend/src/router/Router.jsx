import { Route, Routes } from "react-router-dom";
import { Home, UserSignUp, Notifications } from "../z-point/Point.jsx";
import { Settings, ArticlesList } from "../z-point/Point.jsx";
import { CompleteArticle, Collection } from "../z-point/Point.jsx";
import { UserLogin, ChannelProfile, ChannelsList } from "../z-point/Point.jsx";
import ProtectedByUser from "./Protected/ProtectedByUser.jsx";
import ProtectedByChannel from "./Protected/ProtectedByChannel.jsx";
import CreateArticle from "../pages/Article/CreateArticle.jsx";
import UpdateArticle from "../pages/Article/UpdateArticle.jsx";
//import all pages form central point of pages
const Router = () => {
  return (
    <Routes>
      {/* common routes of App available of all users */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/auth/login" element={<UserLogin />} />
      <Route exact path="/auth/signUp" element={<UserSignUp />} />
      {/* protected routes by user */}
      <Route element={<ProtectedByUser />}>
        <Route exact path="/articles" element={<ArticlesList />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/channels" element={<ChannelsList />} />
        <Route exact path="/channels/:id" element={<ChannelProfile />} />
        <Route exact path="/articles/:id" element={<CompleteArticle />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/saved" element={<Collection />} />
      </Route>
      {/* protected routes by channels */}
      <Route element={<ProtectedByChannel />}>
        <Route exact path="/articles/create" element={<CreateArticle />} />
        <Route exact path="/articles/update/:id" element={<UpdateArticle />} />
      </Route>
    </Routes>
  );
};

export default Router;
