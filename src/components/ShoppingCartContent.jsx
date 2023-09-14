import React, { Fragment, lazy, useState } from "react";
import { useSelector } from "react-redux";

const SvgArrowRight = lazy(() => import("../assets/svg/SvgArrowRight"));
const SvgShoppingCart = lazy(() => import("../assets/svg/SvgShoppingCart"));
const SvgTickSqure = lazy(() => import("../assets/svg/SvgTickSqure"));
const SvgWallet = lazy(() => import("../assets/svg/SvgWallet"));
const SvgTrash = lazy(() => import("../assets/svg/SvgTrash"));

const ShoppingCartContent = () => {
  const [activeLevel, setActiveLevel] = useState(1);
  const cartItems = useSelector((state) => state.cart.cartItems);
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
          !cartItems.length && "bg-empty bg-no-repeat bg-center"
        } h-[400px] py-5 flex flex-col items-center justify-center border-[1px] border-gray-4 rounded-lg my-4 duration-200`}
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
          <section>
            {/* section for items list */}
            <section>
              <article dir="rtl" className="md:hidden">
                {cartItems?.map((item) => (
                  <div>
                    <div>
                      <h6>{item?.name}</h6>
                      <p>{item?.price}</p>
                    </div>

                    <div>
                      
                    </div>
                  </div>
                ))}
              </article>

              <article></article>
            </section>

            <section></section>
          </section>
        )}
      </section>
      {/*  */}
    </Fragment>
  );
};

export default ShoppingCartContent;
