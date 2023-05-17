// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import SvgMenu from "../assets/svg/SvgMenu";
import SvgUser from "../assets/svg/SvgUser";
import SvgArrowDown from "../assets/svg/SvgArrowDown";
import SvgShoppingCart from "../assets/svg/SvgShoppingCart";
import SvgClose from "../assets/svg/SvgClose";
import Logo from "../assets/image/Logo.svg";
import ekbatan from "../assets/image/agency/ekbatan.png";
import chalus from "../assets/image/agency/chalus.jpg";
import vanak from "../assets/image/agency/vanak.png";
import aghdasieh from "../assets/image/agency/aghdasieh.png";
import SvgSearchColored from "../assets/svg/SvgSearchColored";

// eslint-disable-next-line react/prop-types
const Navbar = ({ menuSwitcher, setMenuSwitcher, searchPop, setSearchPop }) => {
  const [agencySwitcher, setAgencySwitcher] = useState(false);
  const [listSwitcher, setListSwitcher] = useState(false);

  return (
    <div
      className={`font-estedad flex flex-row-reverse items-center justify-between py-[16px] px-[20px] relative max-w-[1024px] mx-auto`}
    >
      {/* navbar container */}
      <button
        onClick={() => setMenuSwitcher(true)}
        className="rounded-[4px] p-1 md:hidden"
      >
        <SvgMenu width={30} height={30} />
      </button>

      {/* logo */}
      <img
        className="w-[150px] h-[38px] md:h-[42px] lg:h-[50px]"
        alt="logo"
        src={Logo}
      />

      {/* navbar item list for desktop size */}
      <div className="hidden md:flex">
        <ul className="flex flex-row-reverse">
          <li className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out">
            صحفه اصلی
          </li>

          <span className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold group relative">
            <p className="flex flex-row items-center border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out">
              <SvgArrowDown width={16} height={16} /> شعبه
            </p>
            <ul className="flex-col text-right bg-gray-1 rounded-md shadow-shadow-2 hidden group-hover:flex absolute -right-10 h-[400px] w-[400px] p-2 z-10">
              <li className="flex flex-row-reverse my-2">
                <img
                  className="rounded-md object-cover w-[100px] h-[80px]"
                  alt="agency"
                  src={ekbatan}
                />

                <div className="px-2 text-gray-7 hover:text-Primary">
                  <h3 className="text-lg font-medium">اکباتان</h3>
                  <p className="text-sm font-normal">
                    شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                  </p>
                </div>
              </li>

              <li className="flex flex-row-reverse my-2">
                <img
                  className="rounded-md object-cover w-[100px] h-[80px]"
                  alt="agency"
                  src={chalus}
                />

                <div className="px-2 text-gray-7 hover:text-Primary">
                  <h3 className="text-lg font-medium">چالوس</h3>
                  <p className="text-sm font-normal">
                    چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                    میلانی
                  </p>
                </div>
              </li>

              <li className="flex flex-row-reverse my-2">
                <img
                  className="rounded-md object-cover w-[100px] h-[80px]"
                  alt="agency"
                  src={aghdasieh}
                />

                <div className="px-2 text-gray-7 hover:text-Primary">
                  <h3 className="text-lg font-medium">اقدسیه</h3>
                  <p className="text-sm font-normal">
                    خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
                  </p>
                </div>
              </li>

              <li className="flex flex-row-reverse my-2">
                <img
                  className="rounded-md object-cover w-[100px] h-[80px]"
                  alt="agency"
                  src={vanak}
                />

                <div className="px-2 text-gray-7 hover:text-Primary">
                  <h3 className="text-lg font-medium">ونک</h3>
                  <p className="text-sm font-normal">
                    میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
                  </p>
                </div>
              </li>
            </ul>
          </span>

          <span className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold">
            <p className="flex flex-row items-center border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out">
              <SvgArrowDown width={16} height={16} /> منو
            </p>
          </span>

          <li className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out">
            اعطای نمایندگی
          </li>

          <li className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out">
            درباره ما
          </li>

          <li className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out">
            تماس با ما
          </li>
        </ul>
      </div>

      {/* user and cart button */}
      <div className="flex">
        <button className="p-1 bg-[#e5f2e9] rounded-[4px] md:p-2">
          <SvgUser width={24} height={24} />
        </button>

        <button className="mx-1 p-1 bg-[#e5f2e9] rounded-[4px] md:p-2">
          <SvgShoppingCart width={24} height={24} />
        </button>

        <button
          onClick={() => setSearchPop(!searchPop)}
          className="p-1 bg-[#e5f2e9] rounded-[4px] md:p-2 hidden lg:flex"
        >
          <SvgSearchColored width={24} height={24} />
        </button>
      </div>

      {/* navbar item list for mobile size */}
      <div
        className={`${
          menuSwitcher ? "w-full opacity-100" : "w-0 opacity-0"
        } min-h-[100vh] flex flex-col text-right bg-white absolute top-0 left-0 z-10 duration-300 ease-out md:hidden`}
      >
        <div className="flex flex-row items-center px-3 justify-between bg-hero-slider bg-blend-darken bg-no-repeat bg-cover bg-center h-[100px]">
          <img
            className="w-[150px] h-[45px] md:h-[42px] lg:h-[50px]"
            alt="logo"
            src={Logo}
          />
          <span
            className="cursor-pointer"
            onClick={() => setMenuSwitcher(false)}
          >
            <SvgClose width={35} height={50} />
          </span>
        </div>
        <ul className="px-3">
          <li className="py-2 my-1 cursor-pointer border-b-[1px] w-full ">
            صحفه اصلی
          </li>
          <span
            className={`flex flex-col py-2 my-1 cursor-pointer border-b-[1px] w-full duration-100 ease-out ${
              agencySwitcher ? "h-[200px]" : "h-[41px]"
            } `}
          >
            <p
              onClick={() => {
                return (
                  setAgencySwitcher(!agencySwitcher), setListSwitcher(false)
                );
              }}
              className="flex flex-row justify-end items-center"
            >
              <SvgArrowDown width={16} height={16} /> شعبه
            </p>
            <ul
              className={`${
                agencySwitcher
                  ? "h-[160px] opacity-100 py-2"
                  : "h-[0px] opacity-0"
              } overflow-y-auto snap-y snap-mandatory`}
            >
              <li className="bg-tint-1 px-3 py-2 rounded-md my-1 h-[85px]">
                <h3 className="text-lg font-medium">اکباتان</h3>
                <p className="text-sm font-normal">
                  شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                </p>
              </li>

              <li className="bg-tint-1 px-3 py-2 rounded-md my-1 h-[85px]">
                <h3 className="text-lg font-medium">چالوس</h3>
                <p className="text-sm font-normal">
                  چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر
                  میلانی
                </p>
              </li>

              <li className="bg-tint-1 px-3 py-2 rounded-md my-1 h-[85px]">
                <h3 className="text-lg font-medium">اقدسیه</h3>
                <p className="text-sm font-normal">
                  خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸
                </p>
              </li>

              <li className="bg-tint-1 px-3 py-2 rounded-md my-1 h-[85px]">
                <h3 className="text-lg font-medium">ونک</h3>
                <p className="text-sm font-normal">
                  میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶
                </p>
              </li>
            </ul>
          </span>
          <span
            className={`flex flex-col py-2 my-1 cursor-pointer border-b-[1px] w-full duration-100 ease-out ${
              listSwitcher ? "h-[200px]" : "h-[41px]"
            } `}
          >
            <p
              onClick={() => {
                return setListSwitcher(!listSwitcher), setAgencySwitcher(false);
              }}
              className="flex flex-row justify-end items-center"
            >
              <SvgArrowDown width={16} height={16} /> منو
            </p>
          </span>
          <li className="py-2 my-1 cursor-pointer border-b-[1px] w-full ">
            اعطای نمایندگی
          </li>
          <li className="py-2 my-1 cursor-pointer border-b-[1px] w-full ">
            درباره ما
          </li>
          <li className="py-2 my-1 cursor-pointer border-b-[1px] w-full ">
            تماس با ما
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
