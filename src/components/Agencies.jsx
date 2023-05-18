// eslint-disable-next-line no-unused-vars
import React, { lazy } from "react";
import chalus from "../assets/image/agency/chalus.jpg";
import aghdasieh from "../assets/image/agency/aghdasieh.png";
import ekbatan from "../assets/image/agency/ekbatan.png";
import vanak from "../assets/image/agency/vanak.png";

const SvgExpand = lazy(() => import("../assets/svg/SvgExpand"));

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

const Agencies = () => {
  return (
    <div className="w-full max-w-[1024px] mx-auto py-[16px] px-[20px] ">
      <h2 className="text-center font-bold text-xl lg:text-2xl my-2 lg:my-4">
        ترخینه گردی
      </h2>
      {/* cards */}
      <div className="flex flex-row-reverse flex-wrap w-full items-center justify-center py-5">
        {agencyData?.map((agency) => (
          <div
            key={agency.id}
            className="w-[340px] h-[102px] border-[1px] border-gray-4 hover:border-Primary rounded-md relative flex flex-row-reverse my-2 sm:mx-1 lg:flex-col lg:w-[230px] lg:h-[344px] hover:shadow-card-shadow ease-in-out duration-500 hover:translate-y-1 group  "
          >
            <img
              className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md lg:w-[228px] lg:h-[230px] lg:rounded-r-none lg:rounded-t-md lg:group-hover:h-[190px] ease-in-out duration-500 "
              alt="agency"
              src={agency?.imageSource}
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
        ))}
      </div>
    </div>
  );
};

export default Agencies;
