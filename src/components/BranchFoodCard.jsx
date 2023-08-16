import React, { Fragment, lazy, useState } from "react";
import SpinnerLoading from "./SpinnerLoading";

const Svg5Star = lazy(() => import("../assets/svg/Svg5Star"));
const Svg4Star = lazy(() => import("../assets/svg/Svg4Star"));
const Svg3Star = lazy(() => import("../assets/svg/Svg3Star"));
const SvgHeart = lazy(() => import("../assets/svg/SvgHeart"));

const BranchFoodCard = ({ food, handleSubmitFoodToCart }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-[230px] min-w-[230px] h-[280px] min-h-[280px] rounded-md border-[1px] border-gray-4 bg-white p-2 shadow-card-shadow hover:shadow-content-card-shadow ease-in-out duration-300">
      <img
        className="min-w-[213px] h-[130px] object-cover rounded-md"
        alt={food?.name}
        src={food?.imgUrl}
        loading="lazy"
      />

      <h4 className="font-normal text-base my-1 text-center">{food?.name}</h4>

      <div className="flex flex-row justify-between items-center my-2">
        <span className="flex flex-row">
          {food?.discountPrice !== null && (
            <Fragment>
              <p className="text-xs font-normal text-error w-[32px] h-[16px] rounded-lg bg-error-extra-light flex justify-center items-center">
                %{food?.percentOfDiscount}
              </p>
              <p className="text-xs font-normal line-through text-gray-7 leading-4 ml-1">
                {food?.mainPrice}
              </p>
            </Fragment>
          )}
        </span>
        <span className="flex flex-row cursor-pointer">
          <SvgHeart width={20} height={20} />
        </span>
      </div>

      <div className="flex flex-row justify-between items-center">
        <span>
          {food?.discountPrice === null ? (
            <p className="font-normal text-xs">{food?.mainPrice} تومان </p>
          ) : (
            <p className="font-normal text-sm text-gray-8 leading-4">
              {" "}
              {food?.discountPrice} تومان
            </p>
          )}
        </span>
        <span className="flex flex-row items-center justify-center">
          <p className="hidden sm:flex font-normal text-xs text-gray-5 mr-1">
            (امتیاز {food?.numOfScore})
          </p>
          <p className="font-normal text-sm">{food?.rate}</p>
          {food?.rate === 5 ? (
            <Svg5Star />
          ) : food?.rate === 4 ? (
            <Svg4Star />
          ) : (
            <Svg3Star />
          )}
        </span>
      </div>
      <button
        onClick={() => {
          setLoading(true);
          handleSubmitFoodToCart(food);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }}
        disabled={loading}
        className="bg-Primary text-white w-[213px] h-[32px] rounded-md mt-4 text-sm font-normal flex items-center justify-center"
      >
        {loading ? <SpinnerLoading size="1.5" /> : " افزودن به سبد خرید"}
      </button>
    </div>
  );
};

export default BranchFoodCard;
