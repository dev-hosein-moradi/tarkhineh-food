import React, { Suspense, lazy } from "react";

import SectionWrapper from "../hoc/sectionWrapper/SectionWrapper";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { textVariant } from "../utils/motion";
import { foodCategory } from "../constants";

const SpinnerLoading = lazy(() => import("./SpinnerLoading"));
const SvgSearch = lazy(() => import("../assets/svg/SvgSearch"));

const FoodsCategory = ({ handleDisplayBranchPop, MenuRef }) => {
  return (
    <div className="w-full max-w-[1024px] mx-auto py-5 flex flex-col items-center">
      {/* search bar */}
      <div className="w-full relative lg:hidden">
        <span className="flex flex-row-reverse items-center justify-center w-[320px] sm:w-[450px] h-[40px] mx-auto border-gray-4 border-[1px] rounded-[4px]">
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
      <LazyMotion features={domAnimation}>
        <m.div variants={textVariant()}>
          <h2
            ref={MenuRef}
            id="all-menu-title"
            className="font-bold text-gray-8 text-2xl sm:text-[26px] md:my-10 md:text-[30px] mt-8"
          >
            منوی رستوران
          </h2>
        </m.div>
      </LazyMotion>

      <div className="flex flex-row-reverse justify-center flex-wrap mt-14">
        {/* card */}
        <Suspense fallback={<SpinnerLoading size={2} />}>
          {foodCategory?.map((cat) => (
            <div
              key={cat?.id}
              className={`category-card relative border-Primary border-[1px] rounded-[4px] h-[111px] lg:h-[160px] w-[162px] lg:w-[230px] mx-1 sm:mx-2 my-12 lg:my-20 hover:shadow-card-shadow ease-out duration-75`}
            >
              <img
                className="object-cover absolute -top-14 lg:-top-24 w-[125px] lg:w-[208px] h-[122px] lg:h-[205px] mx-[11%] lg:mx-[5%]"
                alt="categ"
                src={cat?.imageSrc}
                loading="lazy"
              />
              <button
                onClick={() => handleDisplayBranchPop(true)}
                className="absolute -bottom-4 mx-[20%] lg:mx-[16%] bg-Primary text-white w-[90px] lg:w-[155px] h-[32px] lg:h-[48px] rounded-[4px] shadow-card-shadow font-normal text-[14px] lg:text-[20px]"
              >
                {cat?.name}
              </button>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default SectionWrapper(FoodsCategory);
