import { toast } from "react-toastify";
export const asyncHandler = async (callBack) => {
  return Promise.resolve(callBack()).catch((error) => {
    console.log(error);
    errorHandler(error);
    return null;
  });
};

const errorHandler = (error) => {
  const message = error?.response?.data?.message || "something went wrongs !";
  toast(message);
};

export const asyncHandler2 = (callback) => {
  return (req, res, errorCallBack) => {
    return Promise.resolve(callback(req, res, errorCallBack)).catch(
      errorCallBack
    );
  };
};
