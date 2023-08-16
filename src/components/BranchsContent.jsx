// eslint-disable-next-line no-unused-vars
import React, { lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoods } from "../redux/actions/foodActions";
import Notifications from "./Notifications";
import { addNewItem, getCartItems } from "../redux/actions/cartActions";

const BranchDetail = lazy(() => import("./BranchDetail"));
const BranchFoodCard = lazy(() => import("./BranchFoodCard"));
const SvgNote = lazy(() => import("../assets/svg/SvgNote"));

let initialRequest = true;
let initialRequest2 = true;

const BranchsContent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const foods = useSelector((state) => state.foods.foods);
  const cart = useSelector((state) => state.cart.cartItems);
  const notification = useSelector((state) => state.notifications.notification);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // get list of foods
  useEffect(() => {
    if (initialRequest) {
      if (!foods.length) {
        const parameter = {
          caller: {
            name: "branchContent",
          },
        };
        dispatch(fetchFoods(parameter));
      }
    }

    return () => {
      initialRequest = false;
    };
  }, [foods]);

  // get list of cart
  useEffect(() => {
    if (initialRequest2) {
      if (!cart.length) {
        const parameter = {
          caller: {
            name: "branchContent",
          },
        };
        dispatch(getCartItems(parameter));
      }
    }

    return () => {
      initialRequest2 = false;
    };
  }, [cart]);

  const handleSubmitFoodToCart = (food) => {
    const parameter = {
      item: {
        ...food,
        originId: food.id,
      },
      caller: {
        name: "branchContent",
      },
    };

    dispatch(addNewItem(parameter));
  };

  // get notification
  useEffect(() => {
    const caller = "branchContent";
    Notifications({ caller, notification });
  }, [notification]);

  return (
    <div className="w-full">
      {/* special offer section */}
      <section className="w-full h-[450px] relative card">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-gray-8 pr-4 mt-20">
            پیشنهاد ویژه
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full h-[380px] py-5 relative">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            className=""
          >
            {foods?.map(
              (food) =>
                food?.tag === "so" && (
                  <BranchFoodCard
                    key={food?.id}
                    food={food}
                    handleSubmitFoodToCart={handleSubmitFoodToCart}
                  />
                )
            )}
          </Carousel>
        </div>
      </section>

      {/* favorite item section */}
      <section className="w-full h-[450px] relative bg-Primary py-10 my-16 card">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-white pr-4">
            غذاهای محبوب
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full h-[380px] py-5 relative">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            className=""
          >
            {foods?.map(
              (food) =>
                food?.tag === "ff" && (
                  <BranchFoodCard
                    key={food?.id}
                    food={food}
                    handleSubmitFoodToCart={handleSubmitFoodToCart}
                  />
                )
            )}
          </Carousel>
        </div>
      </section>

      {/* other items section */}
      <section className="w-full h-[450px] relative py-10 my-16 card">
        <motion.div variants={textVariant(0.2)}>
          <h2 className="text-right font-bold text-lg text-gray-8 pr-4">
            غذاهای غیر ایرانی
          </h2>
        </motion.div>
        {/* box wrapper */}
        <div className="w-full h-[380px] py-2 relative">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            className=""
          >
            {foods?.map(
              (food) =>
                food?.tag === "of" && (
                  <BranchFoodCard
                    key={food?.id}
                    food={food}
                    handleSubmitFoodToCart={handleSubmitFoodToCart}
                  />
                )
            )}
          </Carousel>
        </div>
      </section>

      <div
        onClick={() => {
          navigate(`/branch/${params?.branchName}/menu`);
          window.scrollTo(0, 0);
        }}
        className="w-48 h-12 px-2 my-8 md:my-10 flex flex-row items-center justify-around mx-auto border-Primary border-[1px] rounded hover:shadow-shadow-2 cursor-pointer"
      >
        <p className="text-Primary font-normal text-base">مشاهده منوی کامل</p>
        <SvgNote />
      </div>

      {/* information of branch */}
      <BranchDetail />
    </div>
  );
};

export default BranchsContent;
