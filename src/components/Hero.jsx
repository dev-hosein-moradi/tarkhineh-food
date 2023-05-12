// eslint-disable-next-line no-unused-vars
import React from "react";
import SvgArrowLeft from "../assets/svg/SvgArrowLeft";
import SvgArrowRight from "../assets/svg/SvgArrowRight";

const Hero = () => {
  return (
    <>
      <div className="hidden md:flex absolute left-0 mx-3 h-[30px] w-[30px] cursor-pointer">
        <SvgArrowLeft width={28} height={28} />
      </div>
      {/* text content */}
      <div className="">
        <p className="text-lg md:text-2xl lg:text-3xl font-bold">
          تجربه غذای سالم و گیاهی به سبک ترخینه
        </p>
      </div>

      {/* button */}
      <button className="bg-Primary px-3 py-2 md:px-4 md:py-3 md:mt-6 rounded-md mt-4 font-normal text-[14px]">
        سفارش آنلاین غذا
      </button>

      {/* spot slider */}
      <div className="absolute bottom-0 mx-auto w-[120px] h-[30px] bg-white rounded-t-[90px] rounded-r[90px] flex flex-row items-center justify-around px-5">
        <span className="w-[14px] h-[14px] rounded-[7px] bg-Primary transform scale-150 border-tint-1 border-[2px] cursor-pointer"></span>
        <span className="w-[8px] h-[8px] rounded-[4px] bg-gray-5 cursor-pointer"></span>
        <span className="w-[8px] h-[8px] rounded-[4px] bg-gray-5 cursor-pointer"></span>
        <span className="w-[8px] h-[8px] rounded-[4px] bg-gray-5 cursor-pointer"></span>
        <span className="w-[8px] h-[8px] rounded-[4px] bg-gray-5 cursor-pointer"></span>
        <span className="w-[8px] h-[8px] rounded-[4px] bg-gray-5 cursor-pointer"></span>
      </div>
      <div className="hidden md:flex absolute right-0 mx-3 h-[30px] w-[30px] cursor-pointer">
        <SvgArrowRight width={28} height={28} />
      </div>
    </>
  );
};

export default Hero;
