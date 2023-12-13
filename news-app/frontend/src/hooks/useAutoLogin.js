import { useEffect, useState } from "react";
import { refreshAutoLogin } from "../api/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth.slice.js";
const useAutoLogin = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await refreshAutoLogin();
      if (!data) {
        setSuccess(false);
        return;
      }
      dispatch(login(data.user));
      setSuccess(true);
      console.log(data);
    })();
  }, [dispatch]);
  return success;
};
export default useAutoLogin;
