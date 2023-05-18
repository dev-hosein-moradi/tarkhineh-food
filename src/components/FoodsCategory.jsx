// eslint-disable-next-line no-unused-vars
import React, { lazy, useEffect, useState } from "react";
import Categ1 from "../assets/image/categ1.svg";
import Categ2 from "../assets/image/categ2.svg";
import Categ3 from "../assets/image/categ3.svg";
import Categ4 from "../assets/image/categ4.svg";

const SvgSearch = lazy(() => import("../assets/svg/SvgSearch"));

const foodCategory = [
  { id: 1, name: "غذای اصلی", imageSrc: Categ1 },
  { id: 2, name: "پیش غذا", imageSrc: Categ2 },
  { id: 3, name: "دسر", imageSrc: Categ3 },
  { id: 4, name: "نوشیدنی", imageSrc: Categ4 },
];

// eslint-disable-next-line no-unused-vars, react/prop-types
const FoodsCategory = ({ handleDisplayBranchPop }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardOffset1, setCardOffset1] = useState(0);
  const [cardOffset2, setCardOffset2] = useState(0);
  const [cardOffset3, setCardOffset3] = useState(0);
  const [cardOffset4, setCardOffset4] = useState(0);
  /* get offsetTop of components */
  useEffect(() => {
    const categoryCard1 = document
      .querySelector(".category-card1")
      .getBoundingClientRect().top;
    categoryCard1 && setCardOffset1(categoryCard1);

    const categoryCard2 = document
      .querySelector(".category-card2")
      .getBoundingClientRect().top;
    categoryCard2 && setCardOffset2(categoryCard2);

    const categoryCard3 = document
      .querySelector(".category-card3")
      .getBoundingClientRect().top;
    categoryCard3 && setCardOffset3(categoryCard2);

    const categoryCard4 = document
      .querySelector(".category-card4")
      .getBoundingClientRect().top;
    categoryCard4 && setCardOffset4(categoryCard4);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(Math.floor(cardOffset1 / 111) + "card 1" + cardOffset1);
    console.log(Math.floor(cardOffset2 / 111) + "card 2" + cardOffset2);
    console.log(Math.floor(cardOffset3 / 111) + "card 3" + cardOffset3);
    console.log(Math.floor(cardOffset4 / 111) + "card 4" + cardOffset4);
    console.log(scrollPosition + "offY");
    // console.log(cardOffset - scrollPosition);
    // if (cardOffset1 - scrollPosition === cardOffset1) {
    //   console.log("card 1");
    // }
    // if (cardOffset2 - scrollPosition === cardOffset2) {
    //   console.log("card 2");
    // }
    // if (cardOffset3 - scrollPosition === cardOffset3) {
    //   console.log("card 3");
    // }
    // if (cardOffset4 - scrollPosition === cardOffset4) {
    //   console.log("card 4");
    // }
  }, [cardOffset1, cardOffset2, cardOffset3, cardOffset4, scrollPosition]);

  return (
    <div className="w-full max-w-[1024px] mx-auto py-5 flex flex-col items-center">
      {/* search bar */}
      <div className="w-full relative lg:hidden">
        <span className="flex flex-row-reverse items-center justify-center w-[320px] sm:w-[450px] h-[40px] mx-auto border-gray-4 border-[1px] rounded-[4px]">
          <input
            className="rtl-grid w-[80%] h-full outline-none px-2 text-gray-8 font-medium text-lg"
            placeholder="جستجو"
            type="text"
            name="food"
          />
          <SvgSearch width={24} height={24} />
        </span>
      </div>

      {/* list of category */}
      <h2 className="font-bold text-gray-8 text-2xl sm:text-[26px] md:my-10 md:text-[30px] mt-8">
        منوی رستوران
      </h2>
      <div className="flex flex-row-reverse justify-center flex-wrap mt-14">
        {/* card */}
        {foodCategory?.map((cat) => (
          <div
            key={cat.id}
            className={`category-card${cat.id} relative border-Primary border-[1px] rounded-[4px] h-[111px] lg:h-[160px] w-[162px] lg:w-[230px] mx-1 sm:mx-2 my-12 lg:my-20 hover:shadow-card-shadow ease-out duration-75`}
          >
            <img
              className="object-cover absolute -top-14 lg:-top-24 w-[125px] lg:w-[208px] h-[122px] lg:h-[205px] mx-[11%] lg:mx-[5%]"
              alt="categ"
              src={cat?.imageSrc}
            />
            <button
              onClick={() => handleDisplayBranchPop(true)}
              className="absolute -bottom-4 mx-[20%] lg:mx-[16%] bg-Primary text-white w-[90px] lg:w-[155px] h-[32px] lg:h-[48px] rounded-[4px] shadow-card-shadow font-normal text-[14px] lg:text-[20px]"
            >
              {cat?.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodsCategory;
