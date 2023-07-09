/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

const SpinnerLoading = ({ size }) => {
  return (
    <div
      id="wrapper"
      className={`dot-spinner relative flex items-center justify-start`}
      style={{ width: `${size}rem`, height: `${size}rem` }}
    >
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
    </div>
  );
};

export default SpinnerLoading;
