import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className="topNav">TOPNAV</div>
      <div className="container">{children}</div>
      <div className="footer" />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
