import React, { Fragment, lazy, useState } from "react";

const SvgArrowRight = lazy(() => import("../assets/svg/SvgArrowRight"));
const SvgShoppingCart = lazy(() => import("../assets/svg/SvgShoppingCart"));
const SvgTickSqure = lazy(() => import("../assets/svg/SvgTickSqure"));
const SvgWallet = lazy(() => import("../assets/svg/SvgWallet"));
const SvgTrash = lazy(() => import("../assets/svg/SvgTrash"));

const ShoppingCartContent = () => {
  const [activeLevel, setActiveLevel] = useState(1);
  return (
    <Fragment>
      {/* road map procces */}
      <div className="h-auto">
        <div>
          <SvgArrowRight width={16} height={16} theme="#353535" />
        </div>

        <div>
          <div>
            <p
              className={` ${
                activeLevel === 1 ? "text-Primary" : "text-gray-4"
              } `}
            >
              سبد خرید
            </p>
            <SvgShoppingCart
              width={24}
              height={24}
              theme={activeLevel === 1 ? "#417F56" : "#CBCBCB"}
            />
          </div>

          <div>
            <p
              className={` ${
                activeLevel === 2 ? "text-Primary" : "text-gray-4"
              } `}
            >
              تکمیل اطلاعات
            </p>
            <SvgTickSqure
              width={24}
              height={24}
              theme={activeLevel === 2 ? "#417F56" : "#CBCBCB"}
            />
          </div>

          <div>
            <p
              className={` ${
                activeLevel === 3 ? "text-Primary" : "text-gray-4"
              } `}
            >
              پرداخت
            </p>
            <SvgWallet
              width={24}
              height={24}
              theme={activeLevel === 3 ? "#417F56" : "#CBCBCB"}
            />
          </div>
        </div>

        <div>
          <div>
            <SvgTrash width={24} height={24} />
          </div>
        </div>
      </div>
      {/* cart items */}
      <section></section>
      {/*  */}
    </Fragment>
  );
};

export default ShoppingCartContent;
