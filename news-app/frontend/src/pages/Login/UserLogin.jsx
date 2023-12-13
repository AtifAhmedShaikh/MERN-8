import React, { useState } from "react";
import FormInput from "../../components/UI/FormInput.jsx";
import Button from "../../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/auth.slice.js";
import { loginUser } from "../../api/auth.js";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // handle controlled components (Inputs) to associated with formData state
  const handleInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  // handle form submit to login the  user and redirect to articles list page
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await loginUser(formData);
    setLoading(false);
    //If some Error occured in login user
    if (!data) return;
    //setup user data in redux store in auth slice
    dispatch(login({ ...data.user }));
    setLoading(false);
    navigate("/articles");
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
            Login in your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-3"
            onSubmit={submitHandler}
            method="POST"
            autoComplete="off"
          >
            <FormInput
              label={"Email"}
              name={"email"}
              placeholder={"Enter your Email "}
              type={"text"}
              value={formData.username}
              onChange={handleInputs}
              required
            />
            <FormInput
              label={"Password"}
              name={"password"}
              placeholder={"Enter your password "}
              type={"password"}
              value={formData.password}
              onChange={handleInputs}
              required
            />
            <div>
              <Button
                type="submit"
                className={
                  "bg-green-600 hover:bg-green-600 text-gray-100 disabled:bg-green-200 disabled:cursor-default disabled::text-gray-400"
                }
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </Button>
            </div>
          </form>
          <div className="w-full flex flex-col items-start">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
