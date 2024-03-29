import React, { Fragment, lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { agencyData } from "../constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/actions/commentActions";
import Notifications from "./Notifications";
import { getBranchs } from "../redux/actions/branchActions";

const CommentCard = lazy(() => import("./CommentCard"));
const SvgLocation = lazy(() => import("../assets/svg/SvgLocation"));
const SvgClock = lazy(() => import("../assets/svg/SvgClock"));
const SvgCallCalling = lazy(() => import("../assets/svg/SvgCallCalling"));

let initialRequest = true;
let initialRequest2 = true;

const BranchDetail = () => {
  const comments = useSelector((state) => state.comments.comments);
  const branchs = useSelector((state) => state.branchs.branchs);
  const notification = useSelector((state) => state.notifications.notification);

  const { branchName } = useParams();
  const dispatch = useDispatch();
  const [slideCounter, setSlideCounter] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // get list of comments
  useEffect(() => {
    if (initialRequest) {
      if (!comments.length) {
        const parameter = {
          caller: {
            name: "branchDetail",
          },
        };
        dispatch(getComments(parameter));
      }
    }

    return () => {
      initialRequest = false;
    };
  }, []);

  // get list of branchs
  useEffect(() => {
    if (initialRequest2) {
      if (!branchs.length) {
        const parameter = {
          caller: {
            name: "branchDetail",
          },
        };
        dispatch(getBranchs(parameter));
      }
    }

    return () => {
      initialRequest2 = false;
    };
  }, []);

  // get notification
  useEffect(() => {
    const caller = "branchDetail";
    Notifications({ caller, notification });
  }, []);

  return (
    <section className="w-full py-5">
      <h1 className="text-xl font-bold text-gray-8 leading-5 text-center mb-4">
        شعبه
        {branchName === "ekbatan"
          ? " اکباتان"
          : branchName === "vanak"
          ? " ونک"
          : branchName === "aghdasieh"
          ? " اقدسیه"
          : " چالوس"}
      </h1>

      {/* image slider */}
      <div className="my-3 overflow-x-hidden w-full">
        <button
          className="hidden lg:flex"
          onClick={() => {
            slideCounter === 0
              ? setSlideCounter(1)
              : setSlideCounter(slideCounter - 1);
          }}
        ></button>

        <div className="w-full snap-x snap-mandatory scroll-smooth flex flex-row-reverse gap-1 image">
          <img
            className={`min-w-[100vw] h-[300px] object-fill `}
            alt={"branch"}
            src={
              agencyData[
                branchName === "ekbatan"
                  ? 0
                  : branchName === "chalus"
                  ? 1
                  : branchName === "aghdasieh"
                  ? 2
                  : 3
              ]?.images[0].image
            }
            loading="lazy"
          />
        </div>

        <button
          className="hidden lg:flex"
          onClick={() => {
            slideCounter === 1
              ? setSlideCounter(0)
              : setSlideCounter(slideCounter + 1);
          }}
        ></button>
      </div>

      {/* contact card */}
      <div className="bg-white w-[85%] sm:w-[80%] md:w-[60%] relative -top-12 mx-auto h-20 sm:h-24 rounded border-Primary border-[1px] flex flex-col sm:flex-row sm:items-center justify-around px-2 ">
        {branchs?.map((contact) => {
          if (contact?.title === branchName) {
            return (
              <Fragment key={contact?.id}>
                <span className="flex flex-row sm:flex-col-reverse sm:w-[40%] text-center w-full items-center justify-end">
                  <p className="font-normal text-sm">{contact?.address}</p>
                  <SvgLocation />
                </span>
                <div className="flex flex-2 flex-row-reverse items-center justify-between sm:w-[60%]">
                  <span className="flex flex-1 flex-row sm:flex-col-reverse items-center">
                    <p className="font-normal text-xs">
                      {contact?.phoneNumber}
                    </p>
                    <SvgCallCalling />
                  </span>
                  <span className="flex flex-2 flex-row sm:flex-col-reverse w-full items-center">
                    <p className="font-normal text-xs">
                      {contact?.timeActivity}
                    </p>
                    <SvgClock width={25} height={25} />
                  </span>
                </div>
              </Fragment>
            );
          }
        })}
      </div>

      {/* people comments about current branch */}
      <div className="w-full h-[250px] py-5 relative comment">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
        >
          {comments?.map((comment) => (
            <CommentCard key={comment.id} {...comment} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default BranchDetail;
