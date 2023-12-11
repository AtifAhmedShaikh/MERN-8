import React from "react";
import FormInput from "../../components/UI/FormInput";
import { Link } from "react-router-dom";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login in your Channel Account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-3"
            onSubmit={submitHandler}
            method="POST"
            autoComplete="off"
          >
            <FormInput />
            <FormInput />
            <div>
              <button
                type="submit"
                className="flex w-fit justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-md font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login Channel Account
              </button>
            </div>
          </form>
          <div className="w-full flex flex-col items-start">
            <p className="mt-4 text-center text-sm text-gray-500">
              you Don&apos;t have an Channel
              <Link
                to={"/auth/signUp"}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-3"
              >
                Register Channel
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
