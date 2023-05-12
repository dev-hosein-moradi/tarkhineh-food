// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Slider from "../assets/image/slider.jpg";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* hero */}
      <section
        className={`w-full h-[220px] md:h-[260px] lg:h-[300px] bg-hero-slider bg-blend-darken bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center text-white relative`}
      >
        <Hero />
      </section>
    </div>
  );
};

export default Main;
