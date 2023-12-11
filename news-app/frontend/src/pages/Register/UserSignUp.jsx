import React, { useState } from "react";
import FormInput from "../../components/UI/FormInput";
import Button from "../../components/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/auth.slice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  // handle controlled components to associated with state
  const handleInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    const data = await registerUser(formData);
    setLoading(false);
    console.log(data);
    if (!data) return;
    dispatch(login({ ...data.user }));
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
            Create a new Account
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
              label={"Name"}
              name={"name"}
              placeholder={"Enter your Name "}
              type={"text"}
              value={formData.name}
              onChange={handleInputs}
              required
            />
            <FormInput
              label={"UserName"}
              name={"username"}
              placeholder={"Enter your User Name "}
              type={"text"}
              value={formData.username}
              onChange={handleInputs}
              required
            />
            <FormInput
              label={"Email"}
              name={"email"}
              placeholder={"Enter your Email "}
              type={"email"}
              value={formData.email}
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
              {loading ? (
                <Button
                  className={
                    "bg-gray-100 border-[1.5px] border-green-600 hover:bg-green-400 text-green-600 disabled:cursor-default"
                  }
                  disabled
                  type={"button"}
                >
                  Loading
                </Button>
              ) : (
                <Button
                  type="submit"
                  className={
                    "bg-indigo-600 text-gray-100 text-md hover:bg-indigo-500"
                  }
                >
                  Create Account
                </Button>
              )}
            </div>
          </form>
          <div className="w-full flex flex-col items-start">
            <p className="mt-4 text-center text-sm text-gray-500">
              Already have an account
              <Link
                to={"/auth/login"}
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-3"
              >
                Login
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

export default SignUp;
