// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Hero from "../components/Hero";
import FoodsCategory from "../components/FoodsCategory";
import QuickAbout from "../components/QuickAbout";
import Agencies from "../components/Agencies";
import Footer from "../components/Footer";
// import Slider from "../assets/image/slider.jpg";

const Main = () => {
  return (
    <div>
      {/* hero */}
      <section
        className={`w-full h-[220px] md:h-[260px] lg:h-[336px] bg-hero-slider bg-blend-darken bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-white relative`}
      >
        <Hero />
      </section>

      {/* food lists */}
      <section className="w-full bg-white">
        <FoodsCategory />
      </section>

      {/* quick summery about us */}
      <section className="w-full bg-summery-img bg-fixed bg-blend-darken bg-no-repeat bg-cover bg-center">
        <QuickAbout />
      </section>

      {/* Agencies introduce section */}
      <section className="bg-white w-full">
        <Agencies />
      </section>

      {/* footer section */}
      <section className="w-full bg-footer-img bg-blend-darken bg-no-repeat bg-cover bg-center">
        <Footer />
      </section>
    </div>
  );
};

export default Main;
