import React, { lazy } from "react";
const Svg3Star = lazy(() => import("../assets/svg/Svg3Star"));
const Svg4Star = lazy(() => import("../assets/svg/Svg4Star"));
const Svg5Star = lazy(() => import("../assets/svg/Svg5Star"));

const CommentCard = ({ name, message, date, avatar, rate }) => {
  return (
    <div className="w-[310px] md:w-[600px] min-w-[310px] md:min-w-[600px] h-36 py-5 md:py-6 px-5 md:px-8 rounded border-[1px] border-gray-4 flex flex-row items-center justify-between">
      <div className="pr-1 md:pr-5">
        <p className="text-xs sm:text-sm font-normal md:font-medium text-right leading-4 md:leading-7 text-gray-8">
          {message}
        </p>
        <span className="flex flex-row items-center mr-1">
          <p className="font-normal md:font-medium text-base text-gray-8">
            {rate}
          </p>
          {rate === 3 ? <Svg3Star /> : rate === 4 ? <Svg4Star /> : <Svg5Star />}
        </span>
      </div>

      <div className="flex flex-col items-end justify-end min-w-[80px]">
        <img
          className="w-16 h-16 object-fill rounded-full"
          alt={name}
          src={avatar}
          loading="lazy"
        />
        <p className="text-xs text-right w-full text-gray-7">{name}</p>
        <p className="text-xs text-gray-7">{date}</p>
      </div>
    </div>
  );
};

export default CommentCard;
