// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { branchContact, ekbatanGallery } from "../dummyData";
import SvgLocation from "../assets/svg/SvgLocation";
import SvgClock from "../assets/svg/SvgClock";
import SvgCallCalling from "../assets/svg/SvgCallCalling";

const BranchDetail = () => {
  const { branchName } = useParams();
  const [slideCounter, setSlideCounter] = useState(0);
  return (
    <section className="w-full py-5">
      <h1 className="text-xl font-bold text-gray-8 leading-5 text-center">
        شعبه
        {branchName === "ekbatan"
          ? " اکباتان"
          : branchName === "vanak"
          ? " ونک"
          : branchName === "aghdasieh"
          ? " اقدسیه"
          : " چالوس"}
      </h1>

      {/* image slider */}
      <div className="my-3 overflow-x-hidden w-full">
        <button
          className="hidden lg:flex"
          onClick={() => {
            slideCounter === 0
              ? setSlideCounter(1)
              : setSlideCounter(slideCounter - 1);
          }}
        ></button>

        <div className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth flex flex-row items-center gap-1">
          {ekbatanGallery?.map((image, index) => {
            return (
              <img
                key={index}
                className={`w-[300px] min-w-[400px] h-60 object-cover `}
                alt={index}
                src={image?.image}
              />
            );
          })}
        </div>

        <button
          className="hidden lg:flex"
          onClick={() => {
            slideCounter === 1
              ? setSlideCounter(0)
              : setSlideCounter(slideCounter + 1);
          }}
        ></button>
      </div>

      {/* contact card */}
      <div className="bg-white w-[98%] relative -top-12 mx-auto h-20 rounded border-Primary border-[1px] flex flex-col justify-around px-2 ">
        {branchContact?.map((contact) => {
          if (contact?.id === branchName) {
            return (
              <Fragment>
                <span className="flex flex-row w-full items-center justify-end">
                  <p className="font-normal text-sm">{contact?.address}</p>
                  <SvgLocation />
                </span>
                <div className="flex flex-row-reverse items-center justify-between">
                  <span className="flex flex-row items-center">
                    <p className="font-normal text-xs">
                      {contact?.phoneNumber}
                    </p>
                    <SvgCallCalling />
                  </span>
                  <span className="flex flex-row w-full items-center">
                    <p className="font-normal text-xs">
                      {contact?.timeActivity}
                    </p>
                    <SvgClock width={25} height={25} />
                  </span>
                </div>
              </Fragment>
            );
          }
        })}
      </div>

      {/* users comment */}
      <div></div>
    </section>
  );
};

export default BranchDetail;
