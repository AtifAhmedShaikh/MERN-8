import PropTypes from 'prop-types'
const Button = ({ children, type = "button", className, onClick }, props) => {
  return (
    <button
      type={type}
      className={`focus:outline-none   focus:ring-1 focus:ring-blue-500 font-medium rounded-[4px] text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button