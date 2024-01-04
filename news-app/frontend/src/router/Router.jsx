import { Route, Routes } from "react-router-dom";
import { Home, Notifications, Login, SignUp } from "../z-point/Point.jsx";
import { Settings, ArticlesList } from "../z-point/Point.jsx";
import { ArticleDetailsPage, Collection } from "../z-point/Point.jsx";
import { ChannelProfile, ChannelsList } from "../z-point/Point.jsx";
import ProtectedByUser from "./Protected/ProtectedByUser.jsx";
import ProtectedByChannel from "./Protected/ProtectedByChannel.jsx";
import CreateArticle from "../pages/Article/CreateArticle.jsx";
import UpdateArticle from "../pages/Article/UpdateArticle.jsx";
import NotFoundPage from "../pages/Error/NotFoundPage.jsx";
import DashBoard from "../pages/Admin/DashBoard.jsx";
import ProtectedByAdmin from "./Protected/ProtectedByAdmin.jsx";
import RegisterChannel from "../pages/Register/ChannelRegister.jsx";
import useAutoLogin from "../hooks/useAutoLogin.js";
//import all pages form central point of pages
const Router = () => {
  // useAutoLogin();
  return (
    <Routes>
      {/* common routes of App available of all */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/auth/login" element={<Login />} />
      <Route exact path="/auth/signUp" element={<SignUp />} />
      <Route exact path="/auth/channelRegister" element={<RegisterChannel />} />
      {/* protected routes by user */}
      <Route element={<ProtectedByUser />}>
        <Route exact path="/articles" element={<ArticlesList />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/channels" element={<ChannelsList />} />
        <Route exact path="/channels/:id" element={<ChannelProfile />} />
        <Route exact path="/articles/:id" element={<ArticleDetailsPage />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/saved" element={<Collection />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      {/* protected routes by channels */}
      <Route element={<ProtectedByChannel />}>
        <Route exact path="/articles/create" element={<CreateArticle />} />
        <Route exact path="/articles/update/:id" element={<UpdateArticle />} />
      </Route>
      {/* protected routes by admin or App owner */}
      <Route element={<ProtectedByAdmin />}>
        <Route exact path="/admin/dashboard" element={<DashBoard />} />
        <Route exact path="/admin/say" element={<>say hello from admin</>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
