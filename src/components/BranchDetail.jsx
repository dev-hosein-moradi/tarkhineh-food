import React, { Fragment, lazy, useState } from "react";
import { useParams } from "react-router-dom";
import { agencyData, comments } from "../constants";

const CommentCard = lazy(() => import("./CommentCard"));
const SvgLocation = lazy(() => import("../assets/svg/SvgLocation"));
const SvgClock = lazy(() => import("../assets/svg/SvgClock"));
const SvgCallCalling = lazy(() => import("../assets/svg/SvgCallCalling"));

const BranchDetail = () => {
  const { branchName } = useParams();
  const [slideCounter, setSlideCounter] = useState(0);

  return (
    <section className="w-full py-5">
      <h1 className="text-xl font-bold text-gray-8 leading-5 text-center mb-4">
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

        <div className="w-full overflow-x-auto sm:overflow-x-hidden snap-x snap-mandatory scroll-smooth flex flex-row-reverse items-center gap-1">
          {agencyData[
            branchName === "ekbatan"
              ? 0
              : branchName === "chalus"
              ? 1
              : branchName === "aghdasieh"
              ? 2
              : 3
          ]?.images?.map((image, index) => {
            return (
              <img
                key={index}
                className={`min-w-[100vw] h-[500px] object-cover `}
                alt={index}
                src={image?.image}
                loading="lazy"
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
      <div className="bg-white w-[85%] sm:w-[80%] md:w-[60%] relative -top-12 mx-auto h-20 sm:h-24 rounded border-Primary border-[1px] flex flex-col sm:flex-row sm:items-center justify-around px-2 ">
        {agencyData?.map((contact) => {
          if (contact?.title === branchName) {
            return (
              <Fragment key={contact?.id}>
                <span className="flex flex-row sm:flex-col-reverse sm:w-[40%] text-center w-full items-center justify-end">
                  <p className="font-normal text-sm">{contact?.address}</p>
                  <SvgLocation />
                </span>
                <div className="flex flex-2 flex-row-reverse items-center justify-between sm:w-[60%]">
                  <span className="flex flex-1 flex-row sm:flex-col-reverse items-center">
                    <p className="font-normal text-xs">
                      {contact?.phoneNumber}
                    </p>
                    <SvgCallCalling />
                  </span>
                  <span className="flex flex-2 flex-row sm:flex-col-reverse w-full items-center">
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

      {/* people comments about current branch */}
      <div className="w-full py-8 flex flex-row-reverse overflow-x-auto md:overflow-x-hidden  gap-3">
        {comments?.map((comment, index) => (
          <CommentCard key={index} {...comment} />
        ))}
      </div>
    </section>
  );
};

export default BranchDetail;
