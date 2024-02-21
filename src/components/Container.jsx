import PropTypes from "prop-types";

export default function Container({ className, children }) {
    return <div className={`mx-auto max-w-7xl px-5 ${className}`}>{children}</div>;
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
