import React, { lazy, useEffect, useState } from "react";
import { agencyData } from "../constants";
import Logo from "../assets/image/Logo.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBranchs } from "../redux/actions/branchActions";

const SvgMenu = lazy(() => import("../assets/svg/SvgMenu"));
const SvgUser = lazy(() => import("../assets/svg/SvgUser"));
const SvgArrowDown = lazy(() => import("../assets/svg/SvgArrowDown"));
const SvgShoppingCart = lazy(() => import("../assets/svg/SvgShoppingCart"));
const SvgClose = lazy(() => import("../assets/svg/SvgClose"));
const SvgSearchColored = lazy(() => import("../assets/svg/SvgSearchColored"));

let initialRequest = true;

const Navbar = ({
  menuSwitcher,
  setMenuSwitcher,
  searchPop,
  setSearchPop,
  setRegisterPop,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const branchs = useSelector((state) => state.branchs.branchs);
  const location = useLocation();

  const [agencySwitcher, setAgencySwitcher] = useState(false);
  const [listSwitcher, setListSwitcher] = useState(false);

  // get list of branchs
  useEffect(() => {
    if (initialRequest) {
      if (!branchs.length) {
        const parameter = {
          caller: {
            name: "navbar",
          },
        };
        dispatch(getBranchs(parameter));
      }
    }

    return () => {
      initialRequest = false;
    };
  }, [branchs]);

  const handleClickLink = (path, shouldClose) => {
    navigate(path);
    window.scrollTo(0, 0);

    shouldClose && setMenuSwitcher(false);
  };

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
        loading="lazy"
      />

      {/* navbar item list for desktop size */}
      <div className="hidden md:flex">
        <ul className="flex flex-row-reverse">
          <li
            onClick={() => handleClickLink(`/`, false)}
            className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out"
          >
            صحفه اصلی
          </li>

          <span className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold group relative">
            <p className="flex flex-row items-center border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out">
              <SvgArrowDown width={16} height={16} /> شعبه
            </p>
            <ul className="flex-col text-right bg-gray-1 rounded-md shadow-shadow-2 hidden group-hover:flex absolute -right-10 h-[400px] w-[400px] p-2 z-10">
              {branchs?.map((agency) => (
                <li
                  onClick={() =>
                    handleClickLink(`/branch/${agency?.title}`, false)
                  }
                  key={agency?.id}
                  className="flex flex-row-reverse my-2"
                >
                  <img
                    className="rounded-md object-cover w-[100px] h-[80px]"
                    alt="agency"
                    src={agency?.imageSource}
                    loading="lazy"
                  />

                  <div className="px-2 text-gray-7 hover:text-Primary">
                    <h3 className="text-lg font-medium">{agency?.name}</h3>
                    <p className="text-sm font-normal">{agency?.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </span>

          <span
            onClick={() => handleClickLink(`/branch/ekbatan/menu`, false)}
            className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold"
          >
            <p className="flex flex-row items-center border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out">
              <SvgArrowDown width={16} height={16} /> منو
            </p>
          </span>

          <li
            onClick={() => handleClickLink(`/brnach/new`, false)}
            className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out"
          >
            اعطای نمایندگی
          </li>

          <li
            onClick={() => handleClickLink(`/about-us`, false)}
            className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out"
          >
            درباره ما
          </li>

          <li
            onClick={() => handleClickLink(`/contact-us`, false)}
            className="lg:mx-1 px-1 cursor-pointer hover:text-Primary text-gray-7 lg:font-bold border-b-white border-b-2 py-1 hover:border-Primary duration-75 ease-out"
          >
            تماس با ما
          </li>
        </ul>
      </div>

      {/* user and cart button */}
      <div className="flex">
        <button
          onClick={() => setRegisterPop(true)}
          className={`p-1 bg-tint-1 rounded-[4px] md:p-2`}
        >
          <SvgUser width={24} height={24} />
        </button>

        <button
          onClick={() => handleClickLink(`/shopping-cart`, false)}
          className={`mx-1 ${
            location?.pathname === "/shopping-cart" ? "bg-Primary" : "bg-tint-1"
          } p-1 rounded-[4px] md:p-2`}
        >
          <SvgShoppingCart
            width={24}
            height={24}
            theme={`${
              location?.pathname === "/shopping-cart" ? "#ffffff" : "#417F56"
            }`}
          />
        </button>

        <button
          onClick={() => setSearchPop(!searchPop)}
          className="p-1 bg-tint-1 rounded-[4px] md:p-2 hidden lg:flex"
        >
          <SvgSearchColored width={24} height={24} />
        </button>
      </div>

      {/* navbar item list for mobile size */}
      <div
        className={`${
          menuSwitcher ? "w-full opacity-100 left-0" : "w-0 opacity-0 -left-12"
        } min-h-[100vh] flex flex-col text-right bg-white absolute top-0  z-10 duration-300 ease-out md:hidden`}
      >
        <div className="flex flex-row items-center px-3 justify-between bg-hero-slider bg-blend-darken bg-no-repeat bg-cover bg-center h-[100px]">
          <img
            className="w-[150px] h-[45px] md:h-[42px] lg:h-[50px]"
            alt="logo"
            src={Logo}
            loading="lazy"
          />
          <span
            className="cursor-pointer"
            onClick={() => setMenuSwitcher(false)}
          >
            <SvgClose width={35} height={50} />
          </span>
        </div>
        <ul className="px-3">
          <li
            onClick={() => handleClickLink(`/`, true)}
            className="py-2 my-1 cursor-pointer border-b-[1px] w-full "
          >
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
              {branchs?.map((agency) => (
                <li
                  key={agency?.id}
                  className="bg-tint-1 px-3 py-2 rounded-md my-1 h-[85px]"
                  onClick={() =>
                    handleClickLink(`branch/${agency?.title}`, true)
                  }
                >
                  <h3 className="text-lg font-medium">{agency?.name}</h3>
                  <p className="text-sm font-normal">{agency?.address}</p>
                </li>
              ))}
            </ul>
          </span>
          <span
            onClick={() => handleClickLink(`/brnach/ekbatanmenu`, false)}
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
          <li
            onClick={() => handleClickLink(`/branch/new`, true)}
            className="py-2 my-1 cursor-pointer border-b-[1px] w-full "
          >
            اعطای نمایندگی
          </li>

          <li
            onClick={() => handleClickLink(`/about-us`, true)}
            className="py-2 my-1 cursor-pointer border-b-[1px] w-full "
          >
            درباره ما
          </li>

          <li
            onClick={() => handleClickLink(`/contact-us`, true)}
            className="py-2 my-1 cursor-pointer border-b-[1px] w-full "
          >
            تماس با ما
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
