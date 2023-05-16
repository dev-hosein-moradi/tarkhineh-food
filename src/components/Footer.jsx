// eslint-disable-next-line no-unused-vars
import React from "react";
import SvgTelegram from "../assets/svg/SvgTelegram";
import SvgInstagram from "../assets/svg/SvgInstagram";
import SvgTwitter from "../assets/svg/SvgTwitter";

const Footer = () => {
  return (
    <div className="w-full max-w-[1024px] mx-auto h-[200px] lg:h-[270px] py-[16px] px-[20px] flex flex-row-reverse justify-between ">
      {/* links */}
      <div className="w-full lg:w-[30%] flex flex-row-reverse items-center justify-around lg:justify-between text-white text-right">
        {/* quick access */}
        <div>
          <h2 className="text-lg lg:text-xl font-normal lg:font-bold mb-3">
            دسترسی آسان
          </h2>

          <ul className="text-sm">
            <li className="mb-2 lg:mb-8 hover:footer-link-hover hover:text-Primary cursor-pointer lg:text-base ">
              پرسش‌های متداول
            </li>
            <li className="mb-2 lg:mb-8 hover:footer-link-hover hover:text-Primary cursor-pointer lg:text-base ">
              قوانین ترخینه
            </li>
            <li className="mb-2 lg:mb-8 hover:footer-link-hover hover:text-Primary cursor-pointer lg:text-base ">
              حریم خصوصی
            </li>
          </ul>

          <div className="flex justify-around mt-3">
            <span className="cursor-pointer hover:footer-link-hover">
              <SvgTelegram />
            </span>

            <span className="cursor-pointer hover:footer-link-hover">
              <SvgInstagram />
            </span>

            <span className="cursor-pointer hover:footer-link-hover">
              <SvgTwitter />
            </span>
          </div>
        </div>

        {/* agency */}
        <div>
          <h2 className="text-lg lg:text-xl font-normal lg:font-bold mb-3">
            شعبه‌های ترخینه
          </h2>
          <ul className="text-sm">
            <li className="mb-2 lg:mb-6 hover:footer-link-hover hover:text-Primary cursor-pointer lg:text-base ">
              شعبه اکباتان
            </li>
            <li className="mb-2 lg:mb-6 hover:footer-link-hover hover:text-Primary cursor-pointer lg:text-base ">
              شعبه چالوس
            </li>
            <li className="mb-2 lg:mb-6 hover:footer-link-hover hover:text-Primary cursor-pointer lg:text-base ">
              شعبه اقدسیه
            </li>
            <li className="mb-2 lg:mb-6 hover:footer-link-hover hover:text-Primary cursor-pointer lg:text-base ">
              شعبه ونک
            </li>
          </ul>
        </div>
      </div>

      {/* cta to us */}
      <div className="lg:flex flex-col items-center text-white hidden w-[60%] ">
        <h2 className="font-bold text-xl leading-7 ml-auto">پیام به ترخینه </h2>
        <div className="flex flex-row-reverse">
          <div>
            <input
              className="bg-transparent w-[270px] h-[40px] text-[15px] font-normal border-[1px] border-gray-6 hover:border-gray-1 my-1 rounded-md outline-none rtl-grid text-white px-4 py-1 focus:border-gray-1  "
              placeholder="نام و نام خانوادگی"
            />
            <input
              className="bg-transparent w-[270px] h-[40px] text-[15px] font-normal border-[1px] border-gray-6 hover:border-gray-1 my-1 rounded-md outline-none rtl-grid text-white px-4 py-1 focus:border-gray-1  "
              placeholder="شماره تماس"
            />
            <input
              className="bg-transparent w-[270px] h-[40px] text-[15px] font-normal border-[1px] border-gray-6 hover:border-gray-1 my-1 rounded-md outline-none rtl-grid text-white px-4 py-1 focus:border-gray-1  "
              placeholder="آدرس ایمیل (اختیاری)"
            />
          </div>
          <div className="flex flex-col">
            <textarea
              className="bg-transparent w-[300px] h-[135px] text-[15px] font-normal border-[1px] border-gray-6  hover:border-gray-1 my-1 mr-2 rounded-md resize-none outline-none rtl-grid text-white px-4 py-1 focus:border-gray-1 "
              placeholder="پیام شما"
            />
            <p className="font-thin text-xs">0/200</p>
          </div>
        </div>
        <button className="border-[1px] border-gray-6 w-[183px] h-[40px] mr-auto my-2 rounded-md hover:footer-link-hover active:footer-link-hover">
          ارسال پیام
        </button>
      </div>
    </div>
  );
};

export default Footer;
