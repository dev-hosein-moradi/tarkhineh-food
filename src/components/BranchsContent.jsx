// eslint-disable-next-line no-unused-vars
import React from "react";
import SvgArrowLeft from "../assets/svg/SvgArrowLeft";
import BranchFoodCard from "./BranchFoodCard";
import SvgNote from "../assets/svg/SvgNote";
import BranchDetail from "./BranchDetail";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { branchFood } from "../constants";
import SvgArrowRight from "../assets/svg/SvgArrowRight";

const BranchsContent = () => {
  return (
    <div className="w-full">
      {/* special offer section */}
      <section className="w-full h-[450px] relative">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-gray-8 pr-4 mt-20">
            پیشنهاد ویژه
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full relative">
          {/* previos btn */}
          <button className="left-3 hidden lg:flex bg-gray-6 absolute">
            <SvgArrowLeft width={30} height={30} />
          </button>

          {/* slides */}
          <div className="flex flex-row-reverse gap-4 w-full overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory px-4 py-10">
            {branchFood?.map(
              (food) =>
                food?.tag === "so" && (
                  <BranchFoodCard key={food?.id} food={food} />
                )
            )}
          </div>

          {/* next btn */}
          <button className="right-3 hidden lg:flex bg-gray-6 absolute">
            <SvgArrowRight width={30} height={30} />
          </button>
        </div>
      </section>

      {/* favorite item section */}
      <section className="w-full h-[450px] relative bg-Primary py-10 my-16">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-white pr-4">
            غذاهای محبوب
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full absolute">
          {/* previos btn */}
          <button className="left-0 hidden lg:flex ">
            <SvgArrowLeft width={30} height={30} />
          </button>

          {/* slides */}
          <div className="flex flex-row-reverse gap-4 w-full overflow-x-auto snap-x snap-mandatory px-4 py-10">
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
      <section className="w-full h-[450px] relative py-10 my-16">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-gray-8 pr-4">
            غذاهای غیر ایرانی
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full absolute">
          {/* previos btn */}
          <button className="left-0 hidden lg:flex ">
            <SvgArrowLeft width={30} height={30} />
          </button>

          {/* slides */}
          <div className="flex flex-row-reverse gap-4 w-full overflow-x-auto snap-x snap-mandatory px-4 py-10">
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

      <div className="w-48 h-12 px-2 my-8 md:my-10 flex flex-row items-center justify-around mx-auto border-Primary border-[1px] rounded hover:shadow-shadow-2 cursor-pointer">
        <p className="text-Primary font-normal text-base">مشاهده منوی کامل</p>
        <SvgNote />
      </div>

      {/* information of branch */}
      <BranchDetail />
    </div>
  );
};

export default BranchsContent;
