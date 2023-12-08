import React, { Fragment, lazy, useRef, useState } from "react";

import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodsCategory from "../components/FoodsCategory";
import QuickAbout from "../components/QuickAbout";
import Agencies from "../components/Agencies";

// const Navbar = lazy(() => import("../components/Navbar"));
// const Hero = lazy(() => import("../components/Hero"));
// const FoodsCategory = lazy(() => import("../components/FoodsCategory"));
// const QuickAbout = lazy(() => import("../components/QuickAbout"));
// const Agencies = lazy(() => import("../components/Agencies"));

const SearchPopUp = lazy(() => import("../components/SearchPopUp"));
const BranchPopUp = lazy(() => import("../components/BranchPopUp"));
const Register = lazy(() => import("../components/Register"));
const Footer = lazy(() => import("../components/Footer"));

const Main = ({
  searchPop,
  setSearchPop,
  branchPop,
  setBranchPop,
  darkEffect,
  setDarkEffect,
  menuSwitcher,
  setMenuSwitcher,
  registerPop,
  setRegisterPop,
}) => {
  const MenuRef = useRef();

  /* handling close and open func for search pop up */
  const handleDisplaySearchPop = () => {
    setSearchPop(false);
  };

  /* handling close and open func for search pop up */
  const handleDisplayBranchPop = (e) => {
    setBranchPop(e);
  };

  /* handling close and open func for register pop up */
  const handleDisplayRegisterPop = () => {
    setRegisterPop(false);
  };

  /* handling close and open func for register pop up */
  const handleSwitchDarkEffect = () => {
    setDarkEffect(false);
  };

  return (
    <Fragment>
      <section className={`${darkEffect && "dark-bg-popups"} font-estedad`}>
        <Navbar
          menuSwitcher={menuSwitcher}
          setMenuSwitcher={setMenuSwitcher}
          searchPop={searchPop}
          setSearchPop={setSearchPop}
          darkEffect={darkEffect}
          registerPop={registerPop}
          setRegisterPop={setRegisterPop}
        />
      </section>

      <div className="relative font-estedad">
        {/* register pop up section */}
        <section
          className={`w-[100dvw] h-[100dvh] bg-white absolute left-0 -top-[72px] z-10 ${
            registerPop
              ? "scale-100 opacity-100 pointer-events-auto"
              : "scale-0 opacity-0 pointer-events-none"
          } ease-in-out duration-300 `}
        >
          <Register handleDisplayRegisterPop={handleDisplayRegisterPop} />
        </section>

        {/* hero */}
        <section
          className={`w-full h-[400px] bg-hero-slider bg-blend-darken bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-white relative ${
            darkEffect && "dark-bg-popups"
          } ease-in-out duration-300`}
        >
          <Hero MenuRef={MenuRef} clientParams={"home"} />
        </section>

        {/* food category lists */}
        <section
          className={`w-full bg-white ${
            darkEffect && "dark-bg-popups"
          } ease-in-out duration-300`}
        >
          <FoodsCategory
            MenuRef={MenuRef}
            handleDisplayBranchPop={handleDisplayBranchPop}
          />
        </section>

        {/* search box pop up in desktop size */}
        <section
          className={`absolute top-[12%] search-popup w-[600px] h-[253px] shadow-shadow-12 ${
            searchPop
              ? "scale-100 opacity-100 pointer-events-auto"
              : "scale-0 opacity-0 pointer-events-none"
          } ease-in-out duration-300`}
        >
          <SearchPopUp handleDisplaySearchPop={handleDisplaySearchPop} />
        </section>

        {/* branch list pop up */}
        <section
          className={`absolute top-[15%] sm:top-[13%] z-10 branch-popup-small lg:branch-popup-large w-[320px] lg:w-[808px] h-[502px] lg:h-[441px] shadow-shadow-12 ${
            branchPop
              ? "scale-100 opacity-100 pointer-events-auto"
              : "scale-0 opacity-0 pointer-events-none"
          } ease-in-out duration-300`}
        >
          <BranchPopUp
            handleSwitchDarkEffect={handleSwitchDarkEffect}
            handleDisplayBranchPop={handleDisplayBranchPop}
          />
        </section>

        {/* quick summery about us */}
        <section
          className={`w-full bg-summery-img  bg-blend-darken bg-no-repeat bg-cover bg-center ${
            darkEffect && "dark-bg-popups"
          } ease-in-out duration-300`}
        >
          <QuickAbout />
        </section>

        {/* Agencies introduce section */}
        <section
          className={`bg-white w-full ${darkEffect && "dark-bg-popups"}`}
        >
          <Agencies />
        </section>

        {/* footer section */}
        <section
          className={`w-full bg-footer-img bg-blend-darken bg-no-repeat bg-cover bg-center ${
            darkEffect && "dark-bg-popups"
          } ease-in-out duration-300`}
        >
          <Footer />
        </section>
      </div>
    </Fragment>
  );
};

export default Main;
