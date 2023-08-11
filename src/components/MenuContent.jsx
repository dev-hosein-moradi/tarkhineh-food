import React, { Fragment, lazy, useState } from "react";
import { branchFood, foodCategory, menuSubLink } from "../constants";
import SectionWrapper from "../hoc/sectionWrapper/SectionWrapper";
import MenuFoodCard from "./MenuFoodCard";

const SvgSearch = lazy(() => import("../assets/svg/SvgSearch"));
const SvgShoppingCart = lazy(() => import("../assets/svg/SvgShoppingCart"));

const MenuContent = () => {
  // state for food category active item
  const [menuCategory, setMenuCategory] = useState(1);
  // state for sublink menu active item
  const [activeSubLink, setActiveSubLink] = useState(1);
  return (
    <Fragment>
      {/* top switcher for food title */}
      <ul className="flex flex-row-reverse items-center justify-start px-3 h-12 bg-gray-3 md:px-[4%]">
        {foodCategory?.map((categ) => (
          <li
            key={categ?.id}
            className={`w-20 py-3 h-full text-center leading-5 border-b-[1px] cursor-pointer hover:text-base ease-in-out duration-75 ${
              menuCategory === categ?.id
                ? "text-base border-Primary font-medium text-Primary"
                : "text-gray-7 font-normal text-sm border-gray-3"
            }`}
            onClick={() => setMenuCategory(categ?.id)}
          >
            {categ?.name}
          </li>
        ))}
      </ul>

      {/* content of each food title slider */}
      <div className="w-full min-w-[350px] overflow-x-auto flex flex-row-reverse items-center py-3 md:px-[4%]">
        {menuSubLink?.map((link) => (
          <p
            onClick={() => setActiveSubLink(link?.id)}
            key={link?.id}
            className="min-w-[150px] h-40px ml-2 py-1 rounded-md text-center bg-gray-3 text-gray-8 cursor-pointer"
          >
            {link?.title}
          </p>
        ))}
      </div>

      {/* search bar section */}
      <div className="w-full my-4 relative lg:hidden">
        <span className="flex flex-row-reverse items-center justify-center w-[360px] sm:w-[450px] h-[40px] mx-auto border-gray-4 border-[1px] rounded-[4px]">
          <input
            className="rtl-grid w-[80%] h-full outline-none px-2 text-gray-8 font-medium text-lg"
            placeholder="جستجو"
            type="text"
            name="food"
          />
          <SvgSearch width={24} height={24} />
        </span>
      </div>

      {/* irani food */}
      <section className="pt-2 md:px-[2%] lg:px-[4%]">
        <div className="flex flex-row-reverse items-center justify-between">
          <h2 className="font-bold text-lg text-gray-8 leading-5">
            غذاهای ایرانی
          </h2>

          <button className="flex flex-row-reverse justify-between items-center w-[120px] h-[38px] rounded border-[1px] border-Primary p-2 text-Primary">
            <SvgShoppingCart width={20} height={20} />
            <p className="font-normal text-sm leading-5">تکمیل خرید</p>
          </button>
        </div>

        <div className="grid md:grid-cols-2 items-center justify-center gap-2 mt-5">
          {branchFood.map(
            (food) =>
              food.type === "irani" && (
                <MenuFoodCard key={food.id} food={food} />
              )
          )}
        </div>
      </section>

      {/* other food */}
      <section className="pt-2 my-10">
        <div className="flex flex-row-reverse items-center justify-between px-3">
          <h2 className="font-bold text-lg text-gray-8 leading-5">
            غذاهای غیر ایرانی
          </h2>
        </div>

        <div className="grid md:grid-cols-2 items-center justify-center gap-2 mt-5">
          {branchFood.map(
            (food) =>
              food.type === "other" && (
                <MenuFoodCard key={food.id} food={food} />
              )
          )}
        </div>
      </section>

      {/* pizza */}
      <section className="pt-2 my-10">
        <div className="flex flex-row-reverse items-center justify-between px-3">
          <h2 className="font-bold text-lg text-gray-8 leading-5">پیتزاها</h2>
        </div>

        <div className="grid md:grid-cols-2 items-center justify-center gap-2 mt-5">
          {branchFood.map(
            (food) =>
              food.type === "pizza" && (
                <MenuFoodCard key={food.id} food={food} />
              )
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default SectionWrapper(MenuContent);
