import React, { lazy } from "react";
import { agencyData } from "../constants";
import { useNavigate } from "react-router-dom";

const SvgCloseSolid = lazy(() => import("../assets/svg/SvgCloseSolid"));

const BranchPopUp = ({ handleDisplayBranchPop, handleSwitchDarkEffect }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-gray-3 flex flex-row items-center w-full h-[84px] px-4 py-1 rounded-t-md">
        <span
          className="cursor-pointer"
          onClick={() => handleDisplayBranchPop(false)}
        >
          <SvgCloseSolid width={40} height={40} />
        </span>
        <h2 className="w-[100%] text-center font-semibold text-xl text-gray-8">
          انتخاب شعبه
        </h2>
      </div>

      <div className="bg-white h-[418px] w-full lg:h-[357px] rounded-b-md">
        <p className="font-normal text-sm lg:text-base md:font-medium text-gray-8 px-1 py-3 lg:py-5 text-center">
          برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید
        </p>

        <ul className="flex flex-col lg:flex-row items-center justify-between lg:justify-around">
          {agencyData?.map((agency) => (
            <li
              onClick={() => {
                navigate(`/branch/${agency?.title}`);
                window.scrollTo(0, 0);
                handleSwitchDarkEffect();
              }}
              key={agency.id}
              className="w-[288px] lg:w-[175px] h-[80px] lg:h-[260px] flex flex-row-reverse lg:flex-col mb-1 border-[1px] border-gray4 rounded-md cursor-pointer hover:border-Primary hover:shadow-card-shadow ease-in-out duration-200 "
            >
              <img
                className="h-[78px] lg:h-[179px] min-w-[114px] lg:min-w-[173px] rounded-r-md lg:rounded-r-none lg:rounded-t-md object-cover"
                alt="agency"
                src={agency?.imageSource}
                loading="lazy"
              />
              <span className="flex flex-col items-center justify-center text-center px-1">
                <h6 className="font-normal lg:font-medium text-sm lg:text-base ">
                  {agency?.name}
                </h6>
                <p className="font-normal text-xs">{agency?.address}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BranchPopUp;
