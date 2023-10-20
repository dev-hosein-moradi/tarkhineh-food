import React, { lazy } from "react";
const SvgTrash = lazy(() => import("../assets/svg/SvgTrash"));
const Svg5Star = lazy(() => import("../assets/svg/Svg5Star"));
const Svg4Star = lazy(() => import("../assets/svg/Svg4Star"));
const Svg3Star = lazy(() => import("../assets/svg/Svg3Star"));

const ShoppingFoodCard = ({
  name,
  price,
  quintity,
  imgUrl,
  compounds,
  mainPrice,
  percentOfDiscount,
  rate,
}) => {
  return (
    <div className="flex flex-row items-center justify-between bg-gray-1 lg:bg-white lg:border-[1px] border-gray-4 lg:rounded-lg p-2 lg:min-w-[630px]">
      {/* for large view */}
      <img
        alt={name}
        src={imgUrl}
        className="w-[169px] h-[158px] rounded hidden lg:inline-block"
      />

      <div className="lg:flex flex-col justify-between w-full h-[160px] p-4 hidden">
        {/* for large view */}
        <div className="hidden lg:flex items-center justify-between">
          <h6 className="font-semibold text-xl leading-5 text-gray-8">
            {name}
          </h6>
          <span className="cursor-pointer">
            <SvgTrash width={20} height={20} theme="#417F56" />
          </span>
        </div>

        {/* for large view */}
        <div className="hidden lg:flex justify-between">
          <p className="font-normal text-sm text-gray-8">{compounds}</p>

          <span className="flex flex-row">
            <p className="line-through text-gray-5 text-base font-normal ml-1">
              {mainPrice}
            </p>
            <p className="text-xs font-normal text-error p-1 rounded-md bg-error-extra-light">
              %{percentOfDiscount}
            </p>
          </span>
        </div>

        {/* for large view */}
        <div className="hidden lg:flex flex-row-reverse justify-between items-center">
          <span>
            <p dir="rtl" className="font-normal text-xl text-gray-8">{price} تومان</p>
          </span>
          <div className="flex flex-row-reverse items-center bg-tint-1 text-Primary p-1 rounded">
            <span className="font-bold text-2xl cursor-pointer">-</span>
            <span className="mx-2 font-medium text-base">{quintity}</span>
            <span className="font-bold text-2xl cursor-pointer">+</span>
          </div>
          <span>
            {rate === 5 ? (
              <Svg5Star />
            ) : rate === 4 ? (
              <Svg4Star />
            ) : (
              <Svg3Star />
            )}
          </span>
        </div>
      </div>

      {/* for small view */}
      <div className="lg:hidden">
        <h6 className="font-normal text-sm leading-5 text-gray-8">{name}</h6>
        <p dir="rtl" className="font-normal text-sm text-gray-7">
          {price} تومان
        </p>
      </div>

      <div className="flex flex-row-reverse items-center bg-tint-1 text-Primary p-1 rounded lg:hidden">
        <span className="cursor-pointer">
          <SvgTrash width={20} height={20} theme="#417F56" />
        </span>
        <span className="mx-2 font-medium text-base">{quintity}</span>
        <span className="font-bold text-2xl cursor-pointer">+</span>
      </div>
    </div>
  );
};

export default ShoppingFoodCard;
