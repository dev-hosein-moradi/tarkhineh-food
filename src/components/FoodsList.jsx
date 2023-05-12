// eslint-disable-next-line no-unused-vars
import React from "react";
import SvgSearch from "../assets/svg/SvgSearch";
import Categ1 from "../assets/image/categ1.svg";
import Categ2 from "../assets/image/categ2.svg";
import Categ3 from "../assets/image/categ3.svg";
import Categ4 from "../assets/image/categ4.svg";

const FoodsList = () => {
  return (
    <div className="w-full max-w[1024px] mx-auto py-5 flex flex-col items-center">
      {/* search bar */}
      <div className="w-full relative">
        <span className="flex flex-row-reverse items-center justify-center w-[310px] h-[40px] mx-auto border-gray-4 border-[1px] rounded-[4px]">
          <input
            className="rtl-grid w-[80%] h-full outline-none px-2 text-gray-8 font-medium text-lg"
            placeholder="جستجو"
            type="text"
            name="food"
          />
          <SvgSearch width={24} height={24} />
        </span>
      </div>

      {/* list of category */}
      <h2 className="font-bold text-gray-8 text-2xl mt-8">منوی رستوران</h2>
      <div className="flex flex-row-reverse justify-center flex-wrap mt-14">
        {/* card */}
        <div className="relative border-Primary border-[1px] rounded-[4px] h-[101px] w-[152px] mx-1 my-10">
          <img className="object-cover absolute -top-12 w-[115px] h-[110px] mx-[10%]" alt="categ" src={Categ1} />
          <button className="absolute -bottom-4 mx-[20%] bg-Primary text-white w-[90px] h-[32px] rounded-[4px]">غذای اصلی</button>
        </div>
        <div className="relative border-Primary border-[1px] rounded-[4px] h-[101px] w-[152px] mx-1 my-10">
          <img className="object-cover absolute -top-12 w-[115px] h-[110px] mx-[10%]" alt="categ" src={Categ2} />
          <button className="absolute -bottom-4 mx-[20%] bg-Primary text-white w-[90px] h-[32px] rounded-[4px]">پیش غذا</button>
        </div>
        <div className="relative border-Primary border-[1px] rounded-[4px] h-[101px] w-[152px] mx-1 my-10">
          <img className="object-cover absolute -top-12 w-[115px] h-[110px] mx-[10%]" alt="categ" src={Categ3} />
          <button className="absolute -bottom-4 mx-[20%] bg-Primary text-white w-[90px] h-[32px] rounded-[4px]">دسر</button>
        </div>
        <div className="relative border-Primary border-[1px] rounded-[4px] h-[101px] w-[152px] mx-1 my-10">
          <img className="object-cover absolute -top-14 w-[115px] h-[110px] mx-[10%]" alt="categ" src={Categ4} />
          <button className="absolute -bottom-4 mx-[20%] bg-Primary text-white w-[90px] h-[32px] rounded-[4px]">نوشیدنی</button>
        </div>
      </div>
    </div>
  );
};

export default FoodsList;
