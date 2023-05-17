// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Hero from "../components/Hero";
import FoodsCategory from "../components/FoodsCategory";
import QuickAbout from "../components/QuickAbout";
import Agencies from "../components/Agencies";
import Footer from "../components/Footer";
import SearchPopUp from "../components/SearchPopUp";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Main = ({ searchPop, setSearchPop }) => {
  return (
    <div className="relative">
      {/* hero */}
      <section
        className={`w-full h-[220px] md:h-[260px] lg:h-[336px] bg-hero-slider bg-blend-darken bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-white relative ${
          searchPop && "dark-bg-popups"
        }`}
      >
        <Hero />
      </section>

      {/* food lists */}
      <section className={`w-full bg-white ${searchPop && "dark-bg-popups"}`}>
        <FoodsCategory />
      </section>

      {/* search box pop up in desktop size */}
      <section
        className={`absolute top-[13%] search-popup w-[600px] h-[253px] shadow-shadow-12`}
      >
        <SearchPopUp />
      </section>

      {/* quick summery about us */}
      <section
        className={`w-full bg-summery-img bg-fixed bg-blend-darken bg-no-repeat bg-cover bg-center ${
          searchPop && "dark-bg-popups"
        }`}
      >
        <QuickAbout />
      </section>

      {/* Agencies introduce section */}
      <section className={`bg-white w-full ${searchPop && "dark-bg-popups"}`}>
        <Agencies />
      </section>

      {/* footer section */}
      <section
        className={`w-full bg-footer-img bg-blend-darken bg-no-repeat bg-cover bg-center ${
          searchPop && "dark-bg-popups"
        }`}
      >
        <Footer />
      </section>
    </div>
  );
};

export default Main;
