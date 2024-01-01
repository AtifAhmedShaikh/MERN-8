import React, { useState } from "react";
import FormInput from "../../components/UI/FormInput";
import {  useNavigate } from "react-router-dom";
import TextArea from "../../components/UI/TextArea";
import { useForm } from "react-hook-form";
import { FORM_VALIDATIONS } from "../../config/validation";
import { useDispatch } from "react-redux";
import { registerUser } from "../../api/auth";
import { login } from "../../store/slices/auth.slice.js";
import AuthRelatedLinks from "../../components/Wrappers/AuthRelatedLinks";
import Button from "../../components/UI/Button";
const RegisterChannel = () => {
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
  formData.append("role", "NEWS_CHANNEL");
  formData.append("about",data.about);
  formData.append("headline",data.headline);

  formData.append("profileImage", data.profileImage[0]);
  formData.append("coverImage", data.coverImage[0]);
  setSubmitStatus({ loading: true, error: false });
  // Call the registerUser API with the FormData 
  const response = await registerUser(formData)
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
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="my-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Join Us to Create your Channel
          </h2>
          <p className="text-md">
            Create the channel and uploads articles or posts daily
          </p>
        </div>
        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-1"
            method="post"
            encType="multipart/form-data"
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
              {...register("profileImage")}
              className="file:border-0 file:bg-gray-200 file:text-[12px] file:px-2 file:py-2 file:rounded-lg file:sh"
            />
            <input
              type="file"
              {...register("coverImage")}
              className="file:border-0 file:bg-gray-200 file:text-[12px] file:px-2 file:py-2 file:rounded-lg file:sh"
            />
            <TextArea
              {...register("headline")}
              label="Headline "
              placeholder="Type Headline of your News Channel "
            />
            <TextArea
              {...register("about")}
              label="About"
              placeholder="Type About of your News Channel "
            />
            {submitStatus.error && (
              <p className="text-red-600 text-[14px]">
                something went wrong please try again{" "}
              </p>
            )}
            <div>
              <Button
                type="submit"
                variant={"primary"}
                className="px-2 py-2 "
                isLoading={submitStatus.loading}
              >
                Register New Channel
              </Button>
            </div>
          </form>
          <div className="w-full flex flex-col items-start">
            <AuthRelatedLinks
              text={"already have an account !"}
              linkLabel={"Login Up here !"}
              path={"/auth/login"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterChannel;
