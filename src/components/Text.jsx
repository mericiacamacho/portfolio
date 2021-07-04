import React from "react";
import PropTypes from "prop-types";

export default function Text({ children, type }) {
  if (type === "span") {
    return <span className="title">{children}</span>;
  }
  return <p className="title">{children}</p>;
}

Text.defaultProps = {
  type: "",
};

Text.propTypes = {
  type: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
