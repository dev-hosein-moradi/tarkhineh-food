// eslint-disable-next-line no-unused-vars
import React from "react";
import SvgExpand from "../assets/svg/SvgExpand";
import chalus from "../assets/image/agency/chalus.png";
import aghdasieh from "../assets/image/agency/aghdasieh.png";
import ekbatan from "../assets/image/agency/ekbatan.png";
import vanak from "../assets/image/agency/vanak.png";

const Agencies = () => {
  return (
    <div className="w-full max-w-[1024px] mx-auto py-[16px] px-[20px] ">
      <h2 className="text-center font-bold text-xl">ترخینه گردی</h2>
      {/* cards */}
      <div className="flex flex-row-reverse flex-wrap w-full items-center justify-center py-5">
        <div className="w-[320px] h-[102px] border-[1px] border-Primary rounded-md relative flex flex-row-reverse ">
          <img
            className="w-[140px] h-[100px] object-cover"
            alt="agency"
            src={chalus}
          />

          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
