/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { lazy } from "react";
import Logo from "../assets/image/Logo.svg";

const SvgCloseSolid = lazy(() => import("../assets/svg/SvgCloseSolid"));
const SvgArrowRightColor = lazy(() =>
  import("../assets/svg/SvgArrowRightColor")
);

const Register = ({ handleDisplayRegisterPop }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      {/* btn handler */}
      <div className="w-full h-[150px] flex flex-row items-start justify-between">
        <span
          className="w-[35px] cursor-pointer"
          onClick={() => handleDisplayRegisterPop()}
        >
          <SvgCloseSolid width={30} height={30} />
        </span>

        <span className="w-[35px] pt-[2.5px] cursor-pointer">
          <SvgArrowRightColor width={35} height={30} />
        </span>
      </div>

      {/* brand */}
      <img className="w-[200px] h-[60px] my-8 " alt="logo" src={Logo} />

      <div className="flex flex-col items-center w-full">
        {/* title */}
        <h1 className="font-bold text-lg text-gray-8">ورود / ثبت نام</h1>

        {/* input box */}
        <div className="w-full text-center my-4">
          <h3 className="font-normal text-gray-7 text-base">
            شماره همراه خود را وارد کنید
          </h3>
          <input
            className="rtl-grid w-[320px] h-[40px] border-[1px] border-gray-4 rounded-md my-3 px-4 py-2 outline-none focus:border-Primary hover:border-Primary "
            type="tel"
            placeholder="شماره همراه"
          />
        </div>

        {/* btn send */}
        <button
          className={`w-[320px] h-[40px] font-medium text-base bg-gray-3 rounded-md text-gray-4 pointer-events-none `}
        >
          ورود
        </button>

        {/* policy */}
        <h6 className="w-full font-normal text-sm text-center mt-5 text-gray-8">
          {" "}
          ورود و عضویت در ترخینه به منزله قبول{" "}
          <p className="inline-block text-Primary">قوانین و مقررات </p> است
        </h6>
      </div>
    </div>
  );
};

export default Register;
