import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <LazyMotion features={domAnimation}>
        <m.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          <Component />
        </m.section>
      </LazyMotion>
    );
  };

export default SectionWrapper;

