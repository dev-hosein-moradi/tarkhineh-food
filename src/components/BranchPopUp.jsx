// eslint-disable-next-line no-unused-vars
import React, { lazy } from "react";
import chalus from "../assets/image/agency/chalus.jpg";
import aghdasieh from "../assets/image/agency/aghdasieh.png";
import ekbatan from "../assets/image/agency/ekbatan.png";
import vanak from "../assets/image/agency/vanak.png";

const SvgCloseSolid = lazy(() => import("../assets/svg/SvgCloseSolid"));

const agencyData = [
  {
    id: 1001,
    name: "شعبه اکباتان",
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    imageSource: ekbatan,
  },
  {
    id: 1002,
    name: "شعبه چالوس",
    address:
      "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    imageSource: chalus,
  },
  {
    id: 1003,
    name: "شعبه اقدسیه",
    address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    imageSource: aghdasieh,
  },
  {
    id: 1004,
    name: "شعبه ونک",
    address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    imageSource: vanak,
  },
];

// eslint-disable-next-line react/prop-types
const BranchPopUp = ({ handleDisplayBranchPop }) => {
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
              key={agency.id}
              className="w-[288px] lg:w-[175px] h-[80px] lg:h-[260px] flex flex-row-reverse lg:flex-col mb-1 border-[1px] border-gray4 rounded-md cursor-pointer hover:border-Primary hover:shadow-card-shadow ease-in-out duration-200 "
            >
              <img
                className="h-[78px] lg:h-[179px] min-w-[114px] lg:min-w-[173px] rounded-r-md lg:rounded-r-none lg:rounded-t-md object-cover"
                alt="agency"
                src={agency?.imageSource}
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
