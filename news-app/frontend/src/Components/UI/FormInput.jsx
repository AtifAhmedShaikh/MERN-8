import React from 'react'
import PropTypes from "prop-types";
const FormInput = (props) => {
  return (
    <React.Fragment>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.label}
        </label>
        <div className="mt-2">
          <input
            autoComplete="off"
            required
            className="w-full  px-4 rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...props}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
FormInput.propTypes = {
  label: PropTypes.string,
};
export default FormInput