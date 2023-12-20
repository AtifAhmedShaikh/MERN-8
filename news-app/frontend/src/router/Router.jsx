import { Route, Routes } from "react-router-dom";
import { Home, Notifications, Login, SignUp } from "../z-point/Point.jsx";
import { Settings, ArticlesList } from "../z-point/Point.jsx";
import { CompleteArticle, Collection } from "../z-point/Point.jsx";
import { ChannelProfile, ChannelsList } from "../z-point/Point.jsx";
import ProtectedByUser from "./Protected/ProtectedByUser.jsx";
import ProtectedByChannel from "./Protected/ProtectedByChannel.jsx";
import CreateArticle from "../pages/Article/CreateArticle.jsx";
import UpdateArticle from "../pages/Article/UpdateArticle.jsx";
import NotFoundPage from "../pages/Error/NotFoundPage.jsx";
//import all pages form central point of pages
const Router = () => {
  return (
    <Routes>
      {/* common routes of App available of all */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/auth/login" element={<Login />} />
      <Route exact path="/auth/signUp" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* protected routes by user */}
      <Route element={<ProtectedByUser />}>
        <Route exact path="/articles" element={<ArticlesList />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/channels" element={<ChannelsList />} />
        <Route exact path="/channels/:id" element={<ChannelProfile />} />
        <Route exact path="/articles/:id" element={<CompleteArticle />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/saved" element={<Collection />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {/* protected routes by channels */}
      <Route element={<ProtectedByChannel />}>
        <Route exact path="/articles/create" element={<CreateArticle />} />
        <Route exact path="/articles/update/:id" element={<UpdateArticle />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
