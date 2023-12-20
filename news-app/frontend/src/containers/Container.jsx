import PropTypes from "prop-types";
const Container = ({ children, className }) => {
  return <div className={`pb-10  min-h-[75vh] ${className}`}>{children}</div>;
};
Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
export default Container;