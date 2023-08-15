import React, { Fragment, lazy, useState } from "react";

import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

const Register = lazy(() => import("../components/Register"));
const BranchPopUp = lazy(() => import("../components/BranchPopUp"));
const SearchPopUp = lazy(() => import("../components/SearchPopUp"));
const Footer = lazy(() => import("../components/Footer"));
const Agencies = lazy(() => import("../components/Agencies"));
const QuickAbout = lazy(() => import("../components/QuickAbout"));
const FoodsCategory = lazy(() => import("../components/FoodsCategory"));
const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));

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
  const [token, setToken] = useState();

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
          <Hero clientParams={"home"} />
        </section>

        <GoogleReCaptchaProvider reCaptchaKey="6LcE26knAAAAAPC3AJCcozFmQ3chFCsMsDTc8K28">
          <GoogleReCaptcha
            onVerify={(token) => {
              setToken(token);
            }}
          />
        </GoogleReCaptchaProvider>

        {/* food category lists */}
        <section
          className={`w-full bg-white ${
            darkEffect && "dark-bg-popups"
          } ease-in-out duration-300`}
        >
          <FoodsCategory handleDisplayBranchPop={handleDisplayBranchPop} />
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
