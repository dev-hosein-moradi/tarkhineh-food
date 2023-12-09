import React, { Fragment, lazy, useRef } from "react";

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FoodsCategory from "../../components/FoodsCategory";
import QuickAbout from "../../components/QuickAbout";
import Agencies from "../../components/Agencies";

const SearchPopUp = lazy(() => import("../../components/SearchPopUp"));
const BranchPopUp = lazy(() => import("../../components/BranchPopUp"));
const Register = lazy(() => import("../../components/Register"));
const Footer = lazy(() => import("../../components/Footer"));

const PageWrapper = (Component, IdName, heroTag) =>
  function HOC(props) {
    const MenuRef = useRef();

    /* pages that have access to below components */
    const heroWhiteList = ["Main", "BranchMain", "MenuMain"];
    const searchPopUpWhiteList = ["Main", "BranchMain", "MenuMain"];
    const foodCategoryWhiteList = ["Main"];
    const branchPopUpWhiteList = ["Main"];
    const quickAboutWhiteList = ["Main"];
    const agenciesWhiteList = ["Main"];

    return (
      <Fragment>
        <section
          className={`${props.darkEffect && "dark-bg-popups"} font-estedad`}
        >
          <Navbar
            menuSwitcher={props.menuSwitcher}
            setMenuSwitcher={props.setMenuSwitcher}
            searchPop={props.searchPop}
            setSearchPop={props.setSearchPop}
            darkEffect={props.darkEffect}
            registerPop={props.registerPop}
            setRegisterPop={props.setRegisterPop}
          />
        </section>

        {/* other components */}
        <div className="relative font-estedad">
          {/* register pop up section */}
          <section
            className={`w-[100dvw] h-[100dvh] bg-white absolute left-0 -top-[72px] z-10 ${
              props.registerPop
                ? "scale-100 opacity-100 pointer-events-auto"
                : "scale-0 opacity-0 pointer-events-none"
            } ease-in-out duration-300 `}
          >
            <Register
              registerPop={props.registerPop}
              setRegisterPop={props.setRegisterPop}
              handleDisplayRegisterPop={props.handleDisplayRegisterPop}
            />
          </section>

          {/* hero */}
          {heroWhiteList.includes(IdName) && (
            <section
              className={`w-full h-[400px] bg-hero-slider bg-blend-darken bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-white relative ${
                props.darkEffect && "dark-bg-popups"
              } ease-in-out duration-300`}
            >
              <Hero MenuRef={MenuRef} clientParams={heroTag} />
            </section>
          )}

          {/* food category lists */}
          {foodCategoryWhiteList.includes(IdName) && (
            <section
              className={`w-full bg-white ${
                props.darkEffect && "dark-bg-popups"
              } ease-in-out duration-300`}
            >
              <FoodsCategory
                MenuRef={props.MenuRef}
                handleDisplayBranchPop={props.handleDisplayBranchPop}
              />
            </section>
          )}

          {/* search box pop up in desktop size */}
          {searchPopUpWhiteList.includes(IdName) && (
            <section
              className={`absolute top-[12%] search-popup w-[600px] h-[253px] shadow-shadow-12 ${
                props.searchPop
                  ? "scale-100 opacity-100 pointer-events-auto"
                  : "scale-0 opacity-0 pointer-events-none"
              } ease-in-out duration-300`}
            >
              <SearchPopUp
                handleDisplaySearchPop={props.handleDisplaySearchPop}
              />
            </section>
          )}

          {/* branch list pop up */}
          {branchPopUpWhiteList.includes(IdName) && (
            <section
              className={`absolute top-[15%] sm:top-[13%] z-10 branch-popup-small lg:branch-popup-large w-[320px] lg:w-[808px] h-[502px] lg:h-[441px] shadow-shadow-12 ${
                props.branchPop
                  ? "scale-100 opacity-100 pointer-events-auto"
                  : "scale-0 opacity-0 pointer-events-none"
              } ease-in-out duration-300`}
            >
              <BranchPopUp
                handleSwitchDarkEffect={props.handleSwitchDarkEffect}
                handleDisplayBranchPop={props.handleDisplayBranchPop}
              />
            </section>
          )}

          {/* quick summery about us */}
          {quickAboutWhiteList.includes(IdName) && (
            <section
              className={`w-full bg-summery-img  bg-blend-darken bg-no-repeat bg-cover bg-center ${
                props.darkEffect && "dark-bg-popups"
              } ease-in-out duration-300`}
            >
              <QuickAbout />
            </section>
          )}

          {/* Agencies introduce section */}
          {agenciesWhiteList.includes(IdName) && (
            <section
              className={`bg-white w-full ${
                props.darkEffect && "dark-bg-popups"
              }`}
            >
              <Agencies />
            </section>
          )}

          <Component {...props} />

          {/* footer section */}
          <section
            className={`w-full bg-footer-img bg-blend-darken bg-no-repeat bg-cover bg-center ${
              props.darkEffect && "dark-bg-popups"
            } ease-in-out duration-300`}
          >
            <Footer />
          </section>
        </div>
      </Fragment>
    );
  };
export default PageWrapper;
