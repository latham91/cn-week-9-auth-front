import PropTypes from "prop-types";

export default function Container({ className, children }) {
    return <div className={`${className} max-w-7xl mx-auto`}>{children}</div>;
}

Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};
