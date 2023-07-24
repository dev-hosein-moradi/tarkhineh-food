// eslint-disable-next-line no-unused-vars
import React from "react";
import SvgArrowLeft from "../assets/svg/SvgArrowLeft";
import { branchFood } from "../dummyData";
import BranchFoodCard from "./BranchFoodCard";
import SvgNote from "../assets/svg/SvgNote";
import BranchDetail from "./BranchDetail";

const BranchsContent = () => {
  return (
    <div className="w-full">
      {/* special offer section */}
      <section className="w-full h-[400px] relative">
        <h2 className="text-right font-bold text-lg text-gray-8 pr-4">
          پیشنهاد ویژه
        </h2>
        {/* box wrapper */}
        <div className="w-full absolute">
          {/* previos btn */}
          <button className="left-0 hidden lg:flex ">
            <SvgArrowLeft width={30} height={30} />
          </button>

          {/* slides */}
          <div className="flex flex-row-reverse gap-4 w-full overflow-x-auto snap-x snap-mandatory px-4 py-4">
            {branchFood?.map(
              (food) =>
                food?.tag === "so" && (
                  <BranchFoodCard key={food?.id} food={food} />
                )
            )}
          </div>

          {/* next btn */}
          <button className="right-0 hidden lg:flex"></button>
        </div>
      </section>

      {/* favorite item section */}
      <section className="w-full h-[400px] relative bg-Primary py-4 my-12">
        <h2 className="text-right font-bold text-lg text-white pr-4">
          غذاهای محبوب
        </h2>
        {/* box wrapper */}
        <div className="w-full absolute">
          {/* previos btn */}
          <button className="left-0 hidden lg:flex ">
            <SvgArrowLeft width={30} height={30} />
          </button>

          {/* slides */}
          <div className="flex flex-row-reverse gap-4 w-full overflow-x-auto snap-x snap-mandatory px-4 py-4">
            {branchFood?.map(
              (food) =>
                food?.tag === "ff" && (
                  <BranchFoodCard key={food?.id} food={food} />
                )
            )}
          </div>

          {/* next btn */}
          <button className="right-0 hidden lg:flex"></button>
        </div>
      </section>

      {/* other items section */}
      <section className="w-full h-[400px] relative py-4">
        <h2 className="text-right font-bold text-lg text-gray-8 pr-4">
          غذاهای غیر ایرانی
        </h2>
        {/* box wrapper */}
        <div className="w-full absolute">
          {/* previos btn */}
          <button className="left-0 hidden lg:flex ">
            <SvgArrowLeft width={30} height={30} />
          </button>

          {/* slides */}
          <div className="flex flex-row-reverse gap-4 w-full overflow-x-auto snap-x snap-mandatory px-4 py-4">
            {branchFood?.map(
              (food) =>
                food?.tag === "of" && (
                  <BranchFoodCard key={food?.id} food={food} />
                )
            )}
          </div>

          {/* next btn */}
          <button className="right-0 hidden lg:flex"></button>
        </div>
      </section>

      <div className="w-48 h-12 px-2 my-4 md:my-10 flex flex-row items-center justify-around mx-auto border-Primary border-[1px] rounded hover:shadow-shadow-2 cursor-pointer">
        <p className="text-Primary font-normal text-base">مشاهده منوی کامل</p>
        <SvgNote />
      </div>

      {/* information of branch */}
      <BranchDetail />
      {/* people comments about current branch */}
      {/* footer */}
    </div>
  );
};

export default BranchsContent;
