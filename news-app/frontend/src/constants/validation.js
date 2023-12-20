export const FORM_VALIDATIONS = {
  name: {
    required: "Name is required",
    minLength: {
      value: 5,
      message: "name must be at least 5 characters",
    },
    maxLength: {
      value: 15,
      message: "name must be Greater then 10 characters",
    },
  },

  username: {
    required: "username is required",
    minLength: {
      value: 5,
      message: "username must be at least 5 characters",
    },
    maxLength: {
      value: 15,
      message: "username must be Greater then 10 characters",
    },
    pattern: {
      value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,
      message: "don't use space ",
    },
  },

  email: {
    required: "Email is required",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please enter a valid email",
    },
  },

  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters",
    },
    maxLength: {
      value: 15,
      message: "Password must have Greater then 15 characters",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        "password must have one uppercase, lowercase letter and one digit",
    },
  },
};

// validate: {
//   maxLength: (v) =>
//     v.length <= 50 || "The email should have at most 50 characters",
//   matchPattern: (v) =>
//     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
//     "Email address must be a valid address",
// },
