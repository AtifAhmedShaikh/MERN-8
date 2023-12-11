import { useEffect } from "react";
import { refreshAutoLogin } from "../api/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth.slice.js";
const useAutoLogin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await refreshAutoLogin();
      if (!data) return;
      dispatch(login(data.user));
      console.log(data);
    })();
  }, [dispatch]);
};
export default useAutoLogin;
