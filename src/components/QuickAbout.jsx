import React, { lazy } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/sectionWrapper/SectionWrapper";

const SvgUserSolid = lazy(() => import("../assets/svg/SvgUserSolid"));
const SvgDiagram = lazy(() => import("../assets/svg/SvgDiagram"));
const SvgHomeWifi = lazy(() => import("../assets/svg/SvgHomeWifi"));
const SvgMenuBoard = lazy(() => import("../assets/svg/SvgMenuBoard"));

const QuickAbout = () => {
  return (
    <div className="w-full h-[420px] md:h-[280px] py-[16px] px-[20px] flex flex-col md:flex-row-reverse md:items-center md:justify-between max-w-[1024px] mx-auto">
      <div className="text-white text-right flex flex-col md:w-[50%] lg:w-[45%]">
        <motion.div variants={fadeIn("down", "tween", 0.1, 0.5)}>
          <h2 className="font-normal text-xl mb-4">
            رستوران‌های زنجیره‌ای ترخینه
          </h2>
        </motion.div>

        <p className="font-normal text-[13px] sm:text-[15px] md:text-sm leading-6 md:leading-7 break-normal">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخورشان
          شما عزیزان ارائه دهیم
        </p>

        <button className="border-[1px] border-white w-[150px] h-[35px] font-normal text-[14px] rounded-md mt-4 ">
          اطلاعات بیشتر
        </button>
      </div>

      <div className="flex flex-row-reverse justify-center items-center flex-wrap mt-4 md:w-[50%] lg:justify-end">
        <span className="text-white mx-1 my-2 w-[140px] lg:w-[160px] h-[60px] text-center flex flex-col-reverse items-center  ">
          <p className="font-normal text-[13px] mt-1 ">پرسنلی مجرب و حرفه‌ای</p>
          <SvgUserSolid width={24} height={24} />
        </span>

        <span className="text-white mx-1 my-2 w-[140px] lg:w-[160px] h-[60px] text-center flex flex-col-reverse items-center  ">
          <p className="font-normal text-[13px] mt-1 ">کیفیت بالای غذاها</p>
          <SvgDiagram width={24} height={24} />
        </span>

        <span className="text-white mx-1 my-2 w-[140px] lg:w-[160px] h-[60px] text-center flex flex-col-reverse items-center  ">
          <p className="font-normal text-[13px] mt-1 ">محیطی دلنشین و آرام</p>
          <SvgHomeWifi width={24} height={24} />
        </span>

        <span className="text-white mx-1 my-2 w-[140px] lg:w-[160px] h-[60px] text-center flex flex-col-reverse items-center  ">
          <p className="font-normal text-[13px] mt-1 ">منوی متنوع</p>
          <SvgMenuBoard width={24} height={24} />
        </span>
      </div>
    </div>
  );
};

export default SectionWrapper(QuickAbout, "quickAbout");
