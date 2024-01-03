import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Bounce from 'react-reveal/Bounce';
import FormInput from "../../components/UI/FormInput";
import Button from "../../components/UI/Button";
import { login } from "../../store/slices/auth.slice";
import AuthRelatedLinks from "../../components/Wrappers/AuthRelatedLinks";
import { registerUser } from "../../api/auth";
import { FORM_VALIDATIONS } from "../../config/validation";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    error: false,
  });

// submit handler to call api and create new user account and auto login
const submitHandler = async (data, event) => {
  event.preventDefault();

  // Create a FormData object
  const formData = new FormData();
  // Append text data to the FormData
  formData.append("name", data.name);
  formData.append("username", data.username);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("role", "USER");
  formData.append("profileImage", data.profileImage[0]);
  formData.append("coverImage", data.coverImage[0]);
  setSubmitStatus({ loading: true, error: false });
  // Call the registerUser API with the FormData
  const response = await registerUser(formData);
  if(!response){
    setSubmitStatus({ loading: false, error: true });
    return;
  }
  setSubmitStatus({ loading: false, error: false });
  dispatch(login({ ...response?.data?.user }));
  navigate("/articles");
  setSubmitStatus({ loading: false, error: true });
};

  return (
    <React.Fragment>
       <Bounce left>


      <div className="flex min-h-full flex-col justify-center px-6 py-3 lg:px-2">
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
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            method="post"
            encType="multipart/form-data"
            className="space-y-3"
            onSubmit={handleSubmit(submitHandler)}
            autoComplete="off"
          >
            <FormInput
              label={"Your Name "}
              placeholder={"Xyz..."}
              type={"text"}
              {...register("name", FORM_VALIDATIONS.name)}
              error={errors.name}
            />
            <FormInput
              label={"Your username "}
              placeholder={"abc_xyz..."}
              type={"text"}
              {...register("username", FORM_VALIDATIONS.username)}
              error={errors.username}
            />
            <FormInput
              label={"Your Email "}
              placeholder={"abc@gmail.com"}
              type={"email"}
              {...register("email", FORM_VALIDATIONS.email)}
              error={errors.email}
            />
            <FormInput
              label={"Your password "}
              placeholder={"qwerty@1234"}
              type={"password"}
              {...register("password", FORM_VALIDATIONS.password)}
              error={errors.password}
            />
            <input
              type="file"
              required
              {...register("profileImage")}
              className="file:border-0 file:bg-gray-200 file:text-[12px] file:px-2 file:py-2 file:rounded-lg file:sh"
            />
            <input
              type="file"
              required
              {...register("coverImage")}
              className="file:border-0 file:bg-gray-200 file:text-[12px] file:px-2 file:py-2 file:rounded-lg file:sh"
            />
            {submitStatus.error && (
              <p className="text-red-600 text-[14px]">
                something went wrong please try again{" "}
              </p>
            )}
            <div>
              <Button
                type="submit"
                variant={"success"}
                isLoading={submitStatus.loading}
                className="w-fit px-2 py-2"
              >
                Create Account
              </Button>
            </div>
          </form>
          <AuthRelatedLinks
            text={"already have an account !"}
            linkLabel={"Login here !"}
            path={"/auth/login"}
          />
        </div>
      </div>
      </Bounce>
    </React.Fragment>
  );
};

export default SignUp;
