// eslint-disable-next-line no-unused-vars
import React from "react";
import SvgCloseSolid from "../assets/svg/SvgCloseSolid";
import SvgSearch from "../assets/svg/SvgSearch";

const SearchPopUp = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* header */}
      <div className="bg-gray-3 flex flex-row items-center w-full h-[84px] px-4 py-1 rounded-t-md">
        <span className="cursor-pointer">
          <SvgCloseSolid width={40} height={40} />
        </span>
        <h2 className="w-[80%] text-center font-semibold text-xl text-gray-8">
          جستجو
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-[169px] bg-white py-3 rounded-b-md">
        <p className="py-3 font-normal text-base text-gray-8">
          لطفا متن خود را تایپ و سپس دکمه اینتر را بزنید
        </p>
        {/* search bar */}
        <div className="w-full relative">
          <span className="flex flex-row-reverse items-center justify-center w-[390px] h-[50px] mx-auto border-gray-4 border-[1px] rounded-[4px]">
            <input
              className="rtl-grid w-[80%] h-full outline-none px-2 text-gray-8 font-medium text-lg"
              placeholder="جستجو"
              type="text"
              name="food"
            />
            <SvgSearch width={24} height={24} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchPopUp;
