// eslint-disable-next-line no-unused-vars
import React, { lazy } from "react";
import { branchFood } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BranchDetail = lazy(() => import("./BranchDetail"));
const BranchFoodCard = lazy(() => import("./BranchFoodCard"));
const SvgNote = lazy(() => import("../assets/svg/SvgNote"));

const BranchsContent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full">
      {/* special offer section */}
      <section className="w-full h-[450px] relative card">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-gray-8 pr-4 mt-20">
            پیشنهاد ویژه
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full h-[380px] py-5 relative">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            className=""
          >
            {branchFood?.map(
              (food) =>
                food?.tag === "so" && (
                  <BranchFoodCard key={food?.id} food={food} />
                )
            )}
          </Carousel>
        </div>
      </section>

      {/* favorite item section */}
      <section className="w-full h-[450px] relative bg-Primary py-10 my-16 card">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-white pr-4">
            غذاهای محبوب
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full h-[380px] py-5 relative">
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            className=""
          >
            {branchFood?.map(
              (food) =>
                food?.tag === "ff" && (
                  <BranchFoodCard key={food?.id} food={food} />
                )
            )}
          </Carousel>
        </div>
      </section>

      {/* other items section */}
      <section className="w-full h-[450px] relative py-10 my-16 card">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-gray-8 pr-4">
            غذاهای غیر ایرانی
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full h-[380px] py-2 relative">
        <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            className=""
          >
            {branchFood?.map(
              (food) =>
                food?.tag === "of" && (
                  <BranchFoodCard key={food?.id} food={food} />
                )
            )}
          </Carousel>
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
