import React from "react";
import Logo from "../assets/image/Logo.svg";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100dvw] h-[100dvh]">
      {/* logo */}
      <img
        className="w-[200px] h-[80px] md:w-[250px] md:h-[100px] lg:w-[270px] lg:h-[120px] mb-8 mx-auto"
        alt="logo"
        src={Logo}
      />
      <div className="loader mt-5">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  );
};

export default Loading;
