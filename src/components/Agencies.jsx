// eslint-disable-next-line no-unused-vars
import React from "react";
import SvgExpand from "../assets/svg/SvgExpand";
import chalus from "../assets/image/agency/chalus.jpg";
import aghdasieh from "../assets/image/agency/aghdasieh.png";
import ekbatan from "../assets/image/agency/ekbatan.png";
import vanak from "../assets/image/agency/vanak.png";

const Agencies = () => {
  return (
    <div className="w-full max-w-[1024px] mx-auto py-[16px] px-[20px] ">
      <h2 className="text-center font-bold text-xl lg:text-2xl my-2 lg:my-4">
        ترخینه گردی
      </h2>
      {/* cards */}
      <div className="flex flex-row-reverse flex-wrap w-full items-center justify-center py-5">
        <div className="w-[340px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse my-2 sm:mx-1 lg:flex-col lg:w-[230px] lg:h-[344px] hover:shadow-card-shadow ease-in-out duration-500 hover:translate-y-1 group  ">
          <img
            className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md lg:w-[228px] lg:h-[230px] lg:rounded-r-none rounded-t-md group-hover:h-[190px] ease-in-out duration-500 "
            alt="agency"
            src={ekbatan}
          />
          <span className="absolute bottom-2 lg:bottom-[120px] right-2 hover:scale-105 ease-out duration-75 cursor-pointer lg:group-hover:bottom-[240px] lg:group-hover:right-[105px] lg:duration-500 ">
            <SvgExpand width={20} height={20} />
          </span>

          <span className="text-center px-2">
            <h3 className="font-medium text-[15px] text-gray-8 leading-6 py-1 lg:py-2 lg:text-[20px] lg:font-semibold ">
              شعبه اکباتان
            </h3>
            <p className="text-[13px] font-normal text-gray-8 lg:text-[14px] lg:font-medium ">
              شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
            </p>
          </span>

          <button className="w-[128px] h-[35px] text-shade-2 border-[1px] border-shade-2 rounded-md hidden group-hover:inline-block mx-auto mt-1  "> {'<'} صفحه شعبه</button>
        </div>

        <div className="w-[340px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse my-2 sm:mx-1 lg:flex-col lg:w-[230px] lg:h-[344px] hover:shadow-card-shadow ease-in-out duration-500 hover:translate-y-1 group  ">
          <img
            className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md lg:w-[228px] lg:h-[230px] lg:rounded-r-none rounded-t-md group-hover:h-[190px] ease-in-out duration-500 "
            alt="agency"
            src={chalus}
          />
          <span className="absolute bottom-2 lg:bottom-[120px] right-2 hover:scale-105 ease-out duration-75 cursor-pointer ">
            <SvgExpand width={20} height={20} />
          </span>

          <span className="text-center px-2">
            <h3 className="font-medium text-[15px] text-gray-8 leading-6 py-1 lg:py-2 lg:text-[20px] lg:font-semibold ">
              شعبه چالوس
            </h3>
            <p className="text-[13px] font-normal text-gray-8 lg:text-[14px] lg:font-medium ">
              چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی
            </p>
          </span>

          <button className="w-[128px] h-[35px] text-shade-2 border-[1px] border-shade-2 rounded-md hidden group-hover:inline-block mx-auto mt-1  "> {'<'} صفحه شعبه</button>

        </div>

        <div className="w-[340px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse my-2 sm:mx-1 lg:flex-col lg:w-[230px] lg:h-[344px] hover:shadow-card-shadow ease-in-out duration-500 hover:translate-y-1 group ">
          <img
            className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md lg:w-[228px] lg:h-[230px] lg:rounded-r-none rounded-t-md group-hover:h-[190px] ease-in-out duration-500 "
            alt="agency"
            src={aghdasieh}
          />
          <span className="absolute bottom-2 lg:bottom-[120px] right-2 hover:scale-105 ease-out duration-75 cursor-pointer ">
            <SvgExpand width={20} height={20} />
          </span>

          <span className="text-center px-2">
            <h3 className="font-medium text-[15px] text-gray-8 leading-6 py-1 lg:py-2 lg:text-[20px] lg:font-semibold ">
              شعبه اقدسیه
            </h3>
            <p className="text-[13px] font-normal text-gray-8 lg:text-[14px] lg:font-medium ">
              خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
            </p>
          </span>

          <button className="w-[128px] h-[35px] text-shade-2 border-[1px] border-shade-2 rounded-md hidden group-hover:inline-block mx-auto mt-1  "> {'<'} صفحه شعبه</button>

        </div>

        <div className="w-[340px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse my-2 sm:mx-1 lg:flex-col lg:w-[230px] lg:h-[344px] hover:shadow-card-shadow ease-in-out duration-500 hover:translate-y-1 group ">
          <img
            className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md lg:w-[228px] lg:h-[230px] lg:rounded-r-none rounded-t-md group-hover:h-[190px] ease-in-out duration-500 "
            alt="agency"
            src={vanak}
          />
          <span className="absolute bottom-2 lg:bottom-[120px] right-2 hover:scale-105 ease-out duration-75 cursor-pointer ">
            <SvgExpand width={20} height={20} />
          </span>

          <span className="text-center px-2">
            <h3 className="font-medium text-[15px] text-gray-8 leading-6 py-1 lg:py-2 lg:text-[20px] lg:font-semibold ">
              شعبه ونک
            </h3>
            <p className="text-[13px] font-normal text-gray-8 lg:text-[14px] lg:font-medium ">
              میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
            </p>
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Agencies;
