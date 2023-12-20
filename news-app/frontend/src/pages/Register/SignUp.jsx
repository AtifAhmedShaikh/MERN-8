import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormInput from "../../components/UI/FormInput";
import Button from "../../components/UI/Button";
import { login } from "../../store/slices/auth.slice";
import AuthRelatedLinks from "../../components/Wrappers/AuthRelatedLinks";
import { registerUser } from "../../api/auth";
import { FORM_VALIDATIONS } from "../../constants/validation";

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
  const [file, setFile] = useState(null);

  // submit handler to call api and create user account and auto login
  const submitHandler = async (data, event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("photo", file);
    formData.append("username", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    const response = await registerUser(formData);
    setSubmitStatus({ loading: true, error: false });
    if (!response) {
      setSubmitStatus({ loading: false, error: true });
      return;
    }
    setSubmitStatus({ loading: false, error: false });
    dispatch(login({ ...response?.data?.user }));
    navigate("/articles");
  };
  return (
    <React.Fragment>
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
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
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
                className="w-fit"
              >
                Create Account
              </Button>
            </div>
          </form>
          <AuthRelatedLinks />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
