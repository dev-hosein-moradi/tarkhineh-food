import React from "react";

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
