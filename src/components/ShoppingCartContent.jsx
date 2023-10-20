import React, { Fragment, lazy, useState } from "react";
import { useSelector } from "react-redux";
import ShoppingFoodCard from "./ShoppingFoodCard";

const SvgArrowRight = lazy(() => import("../assets/svg/SvgArrowRight"));
const SvgShoppingCart = lazy(() => import("../assets/svg/SvgShoppingCart"));
const SvgTickSqure = lazy(() => import("../assets/svg/SvgTickSqure"));
const SvgWallet = lazy(() => import("../assets/svg/SvgWallet"));
const SvgTrash = lazy(() => import("../assets/svg/SvgTrash"));
const SvgWarning2 = lazy(() => import("../assets/svg/SvgWarning2"));
const SvgUserSolid = lazy(() => import("../assets/svg/SvgUserSolid"));

const ShoppingCartContent = () => {
  const [activeLevel, setActiveLevel] = useState(1);
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);
  return (
    <Fragment>
      {/* road map procces */}
      <div
        className="h-auto flex flex-row items-center justify-around"
        dir="rtl"
      >
        <div className="lg:hidden">
          <SvgArrowRight width={24} height={24} theme="#353535" />
        </div>

        <div
          className={`flex flex-row items-center justify-center lg:justify-around mx-5 lg:mx-0 `}
        >
          <div
            className={`flex-row-reverse items-center justify-center ${
              activeLevel === 1 ? "flex" : "hidden sm:flex"
            }`}
          >
            <p
              className={`mr-1 ${
                activeLevel === 1 ? "text-Primary" : "text-gray-4"
              } `}
            >
              سبد خرید
            </p>
            <SvgShoppingCart
              width={20}
              height={20}
              theme={activeLevel === 1 ? "#417F56" : "#CBCBCB"}
            />
          </div>

          <hr className="hidden lg:inline-block border-dashed w-[150px]  border-gray-4 mx-2" />

          <div
            className={` flex-row-reverse items-center justify-center mx-5 lg:mx-0 ${
              activeLevel === 2 ? "flex" : "hidden sm:flex"
            }`}
          >
            <p
              className={`mr-1 ${
                activeLevel === 2 ? "text-Primary" : "text-gray-4"
              } `}
            >
              تکمیل اطلاعات
            </p>
            <SvgTickSqure
              width={20}
              height={20}
              theme={activeLevel === 2 ? "#417F56" : "#CBCBCB"}
            />
          </div>

          <hr className="hidden lg:inline-block border-dashed w-[150px] border-gray-4 mx-2" />

          <div
            className={` flex-row-reverse items-center justify-center mx-5 lg:mx-0 ${
              activeLevel === 3 ? "flex" : "hidden sm:flex"
            }`}
          >
            <p
              className={`mr-1 ${
                activeLevel === 3 ? "text-Primary" : "text-gray-4"
              } `}
            >
              پرداخت
            </p>
            <SvgWallet
              width={20}
              height={20}
              theme={activeLevel === 3 ? "#417F56" : "#CBCBCB"}
            />
          </div>
        </div>

        <div className="lg:hidden">
          <SvgTrash width={24} height={24} theme="#353535" />
        </div>
      </div>
      {/* cart items */}
      <section
        className={`${
          !cartItems.length &&
          "bg-empty bg-no-repeat bg-center border-[1px] border-gray-4"
        } h-[480px] py-5 flex flex-col items-center justify-center rounded-lg duration-200`}
      >
        {!cartItems.length ? (
          <Fragment>
            <p
              className="text-gray-7 font-normal sm:font-medium text-sm sm:text-base leading-6 duration-200"
              dir="rtl"
            >
              شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
            </p>
            <button
              className="border-[1px] border-Primary w-[152px] sm:w-[172px] h-[32px] sm:h-[38px] rounded px-8 text-Primary font-normal sm:font-medium text-sm mt-4 hover:bg-Primary bg-white hover:text-white duration-200 shadow-md"
              aria-label="منوی رستوران"
              role="button"
              name="button"
            >
              منوی رستوران
            </button>
          </Fragment>
        ) : (
          <section className="border-[1px] lg:border-none border-gray-4 w-full h-fit rounded p-6 lg:p-0 lg:flex lg:flex-row-reverse justify-between">
            {/* section for items list */}
            <section className="lg:border-[1px] border-gray-4 lg:p-6 lg:rounded-lg lg:max-w-[80%]">
              <article dir="rtl" className="overflow-y-auto max-h-[300px]">
                {cartItems?.map((item) => (
                  <ShoppingFoodCard key={item.id} {...item} />
                ))}
              </article>
            </section>

            <hr className="mt-5 w-full border-gray-4 lg:hidden" />

            <article className="w-full flex flex-col lg:border-[1px] border-gray-4 lg:h-fit lg:p-6 lg:rounded-lg lg:max-w-[30%] mr-auto">
              <div className="lg:flex flex-row items-center justify-between py-2 hidden">
                <span className="cursor-pointer">
                  <SvgTrash width={20} height={20} theme="#353535" />
                </span>
                <p className="font-normal text-sm text-gray-7" dir="rtl">
                  سبد خرید (4)
                </p>
              </div>

              <hr className="my-2 w-full border-gray-4 hidden lg:flex" />

              <div className="flex flex-row items-center justify-between py-2">
                <p className="font-normal text-sm text-gray-7" dir="rtl">
                  63,000 تومان
                </p>
                <h3 className="font-normal text-sm text-gray-8">
                  تخفیف محصولات
                </h3>
              </div>

              <hr className="my-2 w-full border-gray-4" />

              <div className="w-full py-1">
                <span className="flex flex-row items-center justify-between">
                  <p className="font-normal text-sm text-gray-7" dir="rtl">
                    0 تومان
                  </p>
                  <h3 className="font-normal text-sm text-gray-8">
                    هزینه ارسال
                  </h3>
                </span>

                <span className="flex flex-row pt-2">
                  <p
                    className="text-right mr-1 text-warning font-normal text-xs"
                    dir="rtl"
                  >
                    هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                    شما محاسبه و به این مبلغ اضافه خواهد شد.
                  </p>

                  <span>
                    <SvgWarning2 width={20} height={20} theme="#A9791C" />
                  </span>
                </span>
              </div>

              <hr className="my-2 w-full border-gray-4" />

              <div className="flex flex-row items-center justify-between py-1">
                <p className="font-normal text-sm text-Primary" dir="rtl">
                  542,000 تومان
                </p>

                <h3 className="font-normal text-sm text-gray-8">
                  مبلغ قابل پرداخت
                </h3>
              </div>

              <button className="flex flex-row items-center justify-center w-full h-[35px] rounded bg-Primary text-white font-normal text-sm my-2">
                <p>ورود / ثبت‌نام</p>
                <span className="ml-2">
                  <SvgUserSolid width={18} height={18} theme="#fff" />
                </span>
              </button>
            </article>
          </section>
        )}
      </section>
      {/*  */}
    </Fragment>
  );
};

export default ShoppingCartContent;
