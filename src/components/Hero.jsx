// eslint-disable-next-line no-unused-vars
import React from "react";

const Hero = () => {
  return (
    <>
      {/* text content */}
      <div className="">
        <p className="text-lg font-bold">
          تجربه غذای سالم و گیاهی به سبک ترخینه
        </p>
      </div>

      {/* button */}
      <button className="bg-Primary px-3 py-2 rounded-md my-4 font-normal text-[14px]">
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
    </>
  );
};

export default Hero;
