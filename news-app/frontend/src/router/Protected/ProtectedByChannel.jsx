import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const ProtectedByChannel = () => {
  const user = useSelector((state) => state.auth.user);
  return user.role === "NEWS_CHANNEL" ? <Outlet /> : <>your are not channel</>;
};

export default ProtectedByChannel;
