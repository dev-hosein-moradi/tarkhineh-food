import React, { lazy } from "react";
import { useDispatch } from "react-redux";
import { increaseItem, removeItem } from "../redux/actions/cartActions";
const SvgTrash = lazy(() => import("../assets/svg/SvgTrash"));
const Svg5Star = lazy(() => import("../assets/svg/Svg5Star"));
const Svg4Star = lazy(() => import("../assets/svg/Svg4Star"));
const Svg3Star = lazy(() => import("../assets/svg/Svg3Star"));

const ShoppingFoodCard = ({
  name,
  quantity,
  imgUrl,
  compounds,
  mainPrice,
  discountPrice,
  percentOfDiscount,
  rate,
  id,
}) => {
  const dispatch = useDispatch();
  const deceremantItem = () => {
    const parameter = {
      item: {
        id,
        quantity: --quantity,
      },
      itemId: id,
      caller: {
        name: "shopFoodCard",
      },
    };
    dispatch(removeItem(parameter));
  };
  const increasmentItem = () => {
    const parameter = {
      item: {
        id,
        quantity: ++quantity,
      },
      caller: {
        name: "shopFoodCard",
      },
    };
    dispatch(increaseItem(parameter));
  };
  return (
    <div className="flex flex-row-reverse items-center justify-between bg-gray-1 lg:bg-white lg:border-[1px] border-gray-4 lg:rounded-lg p-2 mb-3 mr-1 lg:min-w-[610px]">
      {/* for large view */}
      <img
        alt={name}
        src={imgUrl}
        className="w-[169px] h-[150px] rounded hidden lg:inline-block"
      />

      <div className="lg:flex flex-col justify-between w-full h-[160px] pr-4 py-2 hidden">
        {/* for large view */}
        <div className="hidden lg:flex flex-row-reverse items-center justify-between">
          <h6 className="font-semibold text-xl leading-5 text-gray-8">
            {name}
          </h6>
        </div>

        {/* for large view */}
        <div className="hidden lg:flex flex-row-reverse justify-between">
          <p className="font-normal text-sm text-gray-8">{compounds}</p>

          <span className="flex flex-row-reverse">
            <p className="line-through text-gray-5 text-base font-normal ml-1">
              {Number(mainPrice)?.toLocaleString("fa-IR")}
            </p>
            <p className="text-xs font-normal text-error p-1 rounded-md bg-error-extra-light">
              %{percentOfDiscount?.toLocaleString("fa-IR")}
            </p>
          </span>
        </div>

        {/* for large view */}
        <div className="hidden lg:flex flex-row justify-between items-center">
          <span>
            <p dir="rtl" className="font-normal text-xl text-gray-8 w-[150px]">
              {Number(discountPrice)?.toLocaleString("fa-IR")} تومان
            </p>
          </span>
          <div className="flex flex-row-reverse items-center bg-tint-1 text-Primary p-1 rounded">
            <span
              onClick={deceremantItem}
              className="font-bold text-2xl cursor-pointer"
            >
              -
            </span>
            <span className="mx-2 font-medium text-base">
              {quantity?.toLocaleString("fa-IR")}
            </span>
            <span
              onClick={increasmentItem}
              className="font-bold text-2xl cursor-pointer"
            >
              +
            </span>
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
          {Number(discountPrice)?.toLocaleString("fa-IR")} تومان
        </p>
      </div>

      <div className="flex flex-row-reverse items-center bg-tint-1 text-Primary p-1 rounded lg:hidden">
        <span onClick={deceremantItem} className="cursor-pointer">
          <SvgTrash width={20} height={20} theme="#417F56" />
        </span>
        <span className="mx-2 font-medium text-base">
          {quantity?.toLocaleString("fa-IR")}
        </span>
        <span
          onClick={increasmentItem}
          className="font-bold text-2xl cursor-pointer"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default ShoppingFoodCard;
