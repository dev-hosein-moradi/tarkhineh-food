/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import SearchPopUp from "../components/SearchPopUp";
import SvgSearch from "../assets/svg/SvgSearch";
import BranchsContent from "../components/BranchsContent";
import Footer from "../components/Footer";

const BranchMain = ({
  searchPop,
  setSearchPop,
  darkEffect,
  menuSwitcher,
  setMenuSwitcher,
  registerPop,
  setRegisterPop,
}) => {
  /* handling close and open func for search pop up */
  const handleDisplaySearchPop = () => {
    setSearchPop(false);
  };

  /* handling close and open func for register pop up */
  const handleDisplayRegisterPop = () => {
    setRegisterPop(false);
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

      {/* main content of branch page */}
      <main className="font-estedad relative">
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
          <Hero />
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

        {/* search bar */}
        <div className="w-full my-4 relative lg:hidden">
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

        <BranchsContent />

        {/* footer section */}
        <section
          className={`w-full bg-footer-img bg-blend-darken bg-no-repeat bg-cover bg-center ${
            darkEffect && "dark-bg-popups"
          } ease-in-out duration-300`}
        >
          <Footer />
        </section>
      </main>
    </Fragment>
  );
};

export default BranchMain;
