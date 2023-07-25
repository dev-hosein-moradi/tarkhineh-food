import React, { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/sectionWrapper/SectionWrapper";
import { agencyData } from "../constants";

const SvgExpand = lazy(() => import("../assets/svg/SvgExpand"));

const Agencies = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[1024px] mx-auto py-[16px] px-[20px] ">
      <motion.div variants={textVariant(0.2)}>
        <h2 className="text-center font-bold text-xl lg:text-2xl my-2 lg:my-4">
          ترخینه گردی
        </h2>
      </motion.div>
      {/* cards */}
      <div className="flex flex-row-reverse flex-wrap w-full items-center justify-center py-5">
        {agencyData?.map((agency) => (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", "tween", 0.2, 0.5)}
            key={agency.id}
          >
            <div
              onClick={() => {
                navigate(`branch/${agency?.title}`);
                window.scrollTo(0, 0);
              }}
              className="agency-card w-[340px] h-[102px] border-[1px] border-gray-4 hover:border-Primary rounded-md relative flex flex-row-reverse my-2 sm:mx-1 lg:flex-col lg:w-[230px] lg:h-[344px] hover:shadow-card-shadow ease-in-out duration-500 hover:translate-y-1 group  "
            >
              <img
                className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md lg:w-[228px] lg:h-[230px] lg:rounded-r-none lg:rounded-t-md lg:group-hover:h-[190px] ease-in-out duration-500 "
                alt="agency"
                src={agency?.imageSource}
                loading="lazy"
              />
              <span className="absolute bottom-2 lg:bottom-[130px] right-2 hover:scale-105 ease-out duration-75 cursor-pointer lg:group-hover:bottom-[240px] lg:group-hover:right-[105px] lg:duration-500 ">
                <SvgExpand width={20} height={20} />
              </span>

              <span className="text-center px-2">
                <h3 className="font-medium text-[15px] text-gray-8 leading-6 py-1 lg:py-2 lg:text-[20px] lg:font-semibold ">
                  {agency?.name}
                </h3>
                <p className="text-[13px] font-normal text-gray-8 lg:text-[14px] lg:font-medium ">
                  {agency?.address}
                </p>
              </span>

              <button className=" hidden lg:inline-block w-[128px] h-[35px] text-shade-2 border-[1px] border-shade-2 rounded-md opacity-0 group-hover:opacity-100 ease-in-out duration-500 mx-auto mt-1  ">
                {"<"} صفحه شعبه
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Agencies, "agencies");
