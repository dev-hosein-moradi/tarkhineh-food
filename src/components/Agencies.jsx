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
      <h2 className="text-center font-bold text-xl">ترخینه گردی</h2>
      {/* cards */}
      <div className="flex flex-row-reverse flex-wrap w-full items-center justify-center py-5">
        <div className="w-[340px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse mb-2 ">
          <img
            className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md"
            alt="agency"
            src={ekbatan}
          />
          <span className="absolute bottom-2 right-2 hover:scale-105 ease-out duration-75 cursor-pointer ">
            <SvgExpand width={20} height={20} />
          </span>

          <span className="text-center">
            <h3 className="font-bold">شعبه اکباتان</h3>
            <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
          </span>
        </div>

        <div className="w-[340px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse mb-2 ">
          <img
            className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md"
            alt="agency"
            src={chalus}
          />
          <span className="absolute bottom-2 right-2 hover:scale-105 ease-out duration-75 cursor-pointer ">
            <SvgExpand width={20} height={20} />
          </span>

          <span>
            <h3>شعبه چالوس</h3>
            <p>
              چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی
            </p>
          </span>
        </div>

        <div className="w-[340px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse mb-2 ">
          <img
            className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md"
            alt="agency"
            src={aghdasieh}
          />
          <span className="absolute bottom-2 right-2 hover:scale-105 ease-out duration-75 cursor-pointer ">
            <SvgExpand width={20} height={20} />
          </span>

          <span>
            <h3>شعبه اقدسیه</h3>
            <p>خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸</p>
          </span>
        </div>

        <div className="w-[340px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse mb-2 ">
          <img
            className="w-[160px] min-w-[160px] h-[100px] object-cover rounded-r-md"
            alt="agency"
            src={vanak}
          />
          <span className="absolute bottom-2 right-2 hover:scale-105 ease-out duration-75 cursor-pointer ">
            <SvgExpand width={20} height={20} />
          </span>

          <span>
            <h3>شعبه ونک</h3>
            <p>میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
