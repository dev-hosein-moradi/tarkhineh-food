import React, { Fragment, lazy, useState } from "react";

const SvgHeart = lazy(() => import("../assets/svg/SvgHeart"));
const SvgStar = lazy(() => import("../assets/svg/SvgStar"));

const starArray = [...Array(5).keys()].map((i) => i + 1);
const StarRate = ({ rating }) =>
  starArray.map((i) => {
    return rating >= i ? <SvgStar key={i} /> : null;
  });

const MenuFoodCard = ({ food, handleSubmitFoodToCart }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-[360px] lg:w-[420px] min-w-[320px] lg:min-w-[420px] h-[120px] lg:h-[170px] min-h-[120px] lg:min-h-[170px] rounded-md border-[1px] border-gray-4 bg-white p-2 shadow-card-shadow hover:shadow-content-card-shadow ease-in-out duration-300 flex flex-row-reverse justify-self-center">
      <img
        className="min-w-[100px] lg:min-w-[140px] h-[102px] lg:h-[152px] object-cover rounded-md"
        alt={food?.name}
        src={food?.imgUrl}
        loading="lazy"
      />

      <div className="flex flex-col justify-between items-center w-full pr-2">
        <span className="flex flex-row-reverse items-center justify-between w-full">
          <h4 className="font-normal lg:font-semibold lg:text-xl text-sm text-center text-gray-8 leading-5 lg:leading-9">
            {food?.name}
          </h4>

          {food?.discountPrice !== null && (
            <div className="flex flex-row">
              <p className="text-xs font-normal text-error w-[32px] h-[19px] rounded-lg bg-error-extra-light flex justify-center items-center leading-4">
                %{food?.percentOfDiscount}
              </p>
              <p className="text-xs lg:text-sm  font-normal line-through text-gray-7 leading-4 ml-1">
                {food?.mainPrice}
              </p>
            </div>
          )}
        </span>

        <div className="flex justify-between w-full">
          <span>
            {food?.discountPrice === null ? (
              <p className="font-normal text-xs text-gray-8">
                {food?.mainPrice} تومان{" "}
              </p>
            ) : (
              <p className="font-normal text-xs lg:text-base text-gray-8 leading-4 rtl-grid">
                {food?.discountPrice} تومان
              </p>
            )}
          </span>

          <p className="rtl-grid font-normal text-xs lg:text-sm text-gray-8">
            {food?.compounds?.substring(0, 23) + "..."}
          </p>
        </div>

        <div className="w-full flex flex-row-reverse justify-between items-center">
          <span className="flex flex-row cursor-pointer">
            <SvgHeart width={20} height={20} />
          </span>

          <div className="flex flex-row justify-between items-center">
            <span className="flex flex-row items-center justify-center">
              {<StarRate rating={food?.rate} />}
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
            className="bg-Primary text-white w-[110px] h-[32px] rounded-md text-xs font-normal"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuFoodCard;
