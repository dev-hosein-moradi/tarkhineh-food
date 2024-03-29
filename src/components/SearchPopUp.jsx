import React, { lazy } from "react";

const SvgCloseSolid = lazy(() => import("../assets/svg/SvgCloseSolid"));
const SvgSearch = lazy(() => import("../assets/svg/SvgSearch"));

const SearchPopUp = ({ handleDisplaySearchPop }) => {
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center w-full">
      {/* header */}
      <div className="bg-gray-3 flex flex-row items-center w-full h-[84px] px-4 py-1 rounded-t-md">
        <span
          className="cursor-pointer"
          onClick={() => handleDisplaySearchPop()}
        >
          <SvgCloseSolid width={40} height={40} />
        </span>
        <h2 className="w-[100%] text-center font-semibold text-xl text-gray-8">
          جستجو
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-[169px] bg-white py-3 rounded-b-md">
        <p className="py-3 font-normal text-base lg:text-lg text-gray-8">
          لطفا متن خود را تایپ و سپس دکمه اینتر را بزنید
        </p>
        {/* search bar */}
        <div className="w-full relative">
          <form
            onSubmit={handleSubmitSearch}
            className="flex flex-row-reverse items-center justify-center w-[390px] h-[50px] mx-auto border-gray-4 border-[1px] rounded-[4px]"
          >
            <input
              className="rtl-grid w-[80%] h-full outline-none px-2 text-gray-8 font-medium text-lg"
              placeholder="جستجو"
              type="text"
              name="food"
            />
            <SvgSearch width={24} height={24} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPopUp;
