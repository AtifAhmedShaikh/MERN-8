import { Link } from "react-router-dom";

const AuthRelatedLinks = () => {
  return (
    <div className="w-full flex flex-col items-start my-container-5">
      <p className="mt-4 text-center text-sm text-gray-500">
        Don&apos;t have an account
        <Link
          to={"/auth/signUp"}
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-3"
        >
          Sign Up
        </Link>
      </p>
      <p className="text-center text-sm text-gray-500">
        Go back to Home
        <Link
          to={"/"}
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-3"
        >
          Home
        </Link>
      </p>
    </div>
  );
};

export default AuthRelatedLinks;
