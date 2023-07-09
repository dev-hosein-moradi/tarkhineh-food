/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { lazy, useEffect, useReducer, useState } from "react";
import Logo from "../assets/image/Logo.svg";
import VerificationInput from "react-verification-input";
import SpinnerLoading from "./SpinnerLoading";
import SvgClock from "../assets/svg/SvgClock";

const SvgCloseSolid = lazy(() => import("../assets/svg/SvgCloseSolid"));
const SvgArrowRightColor = lazy(() =>
  import("../assets/svg/SvgArrowRightColor")
);

//phone number reducer
const phoneReducer = (state, action) => {
  if (action.type === "PHONE_INPUT") {
    return {
      value: action.val,
      isValid:
        action.val[0] === "0" &&
        action.val[1] !== "0" &&
        action?.val?.split(" ")[0].length === 11,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid:
        state?.value[0] === "0" &&
        state?.value[1] !== "0" &&
        state?.value?.split(" ")[0].length === 11,
    };
  }
  return { value: "", isValid: false };
};

//code reducer
const CodeReducer = (state, action) => {
  if (action.type === "CODE_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const Register = ({ handleDisplayRegisterPop }) => {
  /* state for phone number */
  const [phoneState, dispatchPhone] = useReducer(phoneReducer, {
    value: "",
    isValid: null,
  });

  /* state for verification code */
  const [codeState, dispatchCode] = useReducer(CodeReducer, {
    value: "",
    isValid: null,
  });

  /* state for error`s */
  const [errors, setErrors] = useState({
    phoneError: "",
    codeError: "",
  });

  /* state for status of form validation */
  const [isFormValid, setIsFormValid] = useState(false);

  /* step counter for register process */
  const [step, setStep] = useState(1);

  /* handle loading action on btn when entered verification code. */
  const [isLoading, setIsLoading] = useState(false);

  /* time counter for another code request */
  const [timeCounter, setTimeCounter] = useState({
    minute: 1,
    secende: 59,
  });

  // change and validate handler for phone number input
  const phoneNumberChangeHandler = (e) => {
    dispatchPhone({ type: "PHONE_INPUT", val: e.target.value });
    setErrors((state) => {
      return {
        ...state,
        phoneError: "",
      };
    });
  };

  const validatePhoneNumberHandler = () => {
    dispatchPhone({ type: "INPUT_BLUR" });
    // handle invalid format error of phone number input
    if (!phoneState.isValid && phoneState.value) {
      setErrors((state) => {
        return {
          ...state,
          phoneError: "enter correct format! 09123456789",
        };
      });
    }
  };

  //check form validate
  const { isValid: phoneNumberIsValid } = phoneState;
  //   const { isValid: codeIsValid } = codeState;

  // set status of form validate
  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsFormValid(phoneNumberIsValid);
    }, 100);

    return () => {
      clearTimeout(identifier);
    };
  }, [phoneNumberIsValid]);

  /* handler for submit phone number */
  const submitPhoneHandler = () => {
    setStep(2);
  };

  const submitCodeHandler = () => {
    setIsLoading(true);
  };

  /* handler for return to prev section */
  const returnSectionHandler = () => {
    setStep(1);
  };

  /* handle logic for time counter */
  useEffect(() => {
    if (step === 2) {
      var timeId = setInterval(() => {
        if (timeCounter.secende === 0 && timeCounter.minute !== 0) {
          setTimeCounter(() => {
            return {
              minute: 0,
              secende: 59,
            };
          });
        } else if (timeCounter.minute === 0 && timeCounter.secende === 0) {
          setTimeCounter(() => {
            return {
              minute: 0,
              secende: 0,
            };
          });
        } else {
          setTimeCounter((prevValue) => {
            return {
              ...prevValue,
              secende: timeCounter.secende - 1,
            };
          });
        }
      }, 1000);
    }

    return () => {
      clearInterval(timeId);
    };
  }, [step, timeCounter]);

  const handleSendAnotherCode = () => {
    setTimeCounter(() => {
      return {
        minute: 1,
        secende: 59,
      };
    });
  };
  return (
    <div className="p-4 h-full flex flex-col items-center overflow-x-hidden relative">
      {/* btn handler */}
      <div className="w-full h-[80px] flex flex-row items-start justify-between">
        <span
          className="w-[35px] cursor-pointer"
          onClick={() => handleDisplayRegisterPop()}
        >
          <SvgCloseSolid width={30} height={30} />
        </span>

        <span
          onClick={returnSectionHandler}
          className={`w-[35px] pt-[2.5px] cursor-pointer ${
            isLoading ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <SvgArrowRightColor width={35} height={30} />
        </span>
      </div>

      {/* brand */}
      <img className="w-[200px] h-[60px] mb-8 " alt="logo" src={Logo} />

      {/* step one of register process */}
      <div
        className={`flex flex-col items-center w-full absolute bottom-[130px] ease-in-out duration-300 ${
          step === 1
            ? "animate-leftToRight left-0 delay-100"
            : "animate-reverseLeftToRight -left-[150%]"
        }`}
      >
        {/* title */}
        <h1 className="font-bold text-lg text-gray-8">ورود / ثبت نام</h1>

        {/* input box */}
        <div className="w-full text-center my-4">
          <h3 className="font-normal text-gray-7 text-base">
            شماره همراه خود را وارد کنید
          </h3>
          <input
            className={`rtl-grid w-[320px] h-[40px] border-[1px] rounded-md my-3 px-4 py-2 outline-none  ${
              phoneNumberIsValid !== null
                ? phoneNumberIsValid
                  ? "focus:border-success hover:border-success border-gray-4"
                  : "border-error"
                : null
            } `}
            type="tel"
            placeholder="شماره همراه"
            pattern="/^[0-9]+$/"
            name="phoneNumber"
            id="phoneNumber"
            autoComplete="off"
            aria-describedby="phoneNumber"
            spellCheck="false"
            required
            min="11"
            max="11"
            value={phoneState.value}
            onChange={phoneNumberChangeHandler}
            onBlur={validatePhoneNumberHandler}
          />
        </div>

        {/* btn send */}
        <button
          onClick={submitPhoneHandler}
          className={`w-[320px] h-[50px] font-medium text-base rounded-md ease-in-out duration-300 ${
            isFormValid
              ? "text-white bg-Primary pointer-events-auto cursor-pointer shadow-shadow-2 hover:shadow-shadow-4 active:shadow-shadow-4"
              : "bg-gray-3 text-gray-4 pointer-events-none"
          } `}
        >
          ورود
        </button>

        {/* policy */}
        <h6 className="w-full font-normal text-sm text-center mt-5 text-gray-8">
          {" "}
          ورود و عضویت در ترخینه به منزله قبول{" "}
          <p className="inline-block text-Primary">قوانین و مقررات </p> است
        </h6>
      </div>

      {/* step 2 of register process */}
      <div
        className={`flex flex-col items-center w-full h-[400px] absolute bottom-[30px] ease-in-out duration-300 ${
          step === 2
            ? "animate-rightToLaft right-0 delay-100"
            : "animate-reverseRightToLaft right-[150%]"
        }`}
      >
        {/* title */}
        <h1 className="font-bold text-lg text-gray-8">کد تائید</h1>

        {/* input box */}
        <div className="w-full text-center my-4 flex flex-col items-center justify-center">
          <h3 className="font-normal text-gray-7 text-base mb-4">
            کد تائید پنج رقمی به شماره {`09025197379`} ارسال شد
          </h3>
          <VerificationInput
            length={5}
            classNames={{
              container: "container",
              character: "character",
              characterInactive: "character--inactive",
              characterSelected: "character--selected",
            }}
          />
        </div>

        {/* timer and edit mobile number section */}
        <div className="flex flex-row-reverse items-center w-[320px] justify-between">
          {timeCounter.minute === 0 && timeCounter.secende === 0 ? (
            <button
              onClick={handleSendAnotherCode}
              className="font-normal text-sm h-[35px] w-[120px] text-gray-7 hover:text-Primary"
            >
              درخواست مجدد کد
            </button>
          ) : (
            <span className="flex flex-row">
              <p className="font-normal text-sm text-gray-7">
                تا دریافت مجدد کد
              </p>
              <p className="w-[35px] text-center font-normal text-sm text-Primary ease-out duration-300">
                {timeCounter.minute}:{timeCounter.secende}
              </p>
              <SvgClock with={20} height={20} />
            </span>
          )}

          <button className="font-normal text-sm h-[35px] w-[100px] text-gray-7 hover:text-Primary">
            ویرایش شماره
          </button>
        </div>

        {/* btn send */}
        <button
          onClick={submitCodeHandler}
          className={`w-[320px] h-[50px] font-medium text-base rounded-md ease-in-out duration-300 mt-4 flex items-center justify-center ${
            isFormValid
              ? "text-white bg-Primary pointer-events-auto cursor-pointer shadow-shadow-2 hover:shadow-shadow-4 active:shadow-shadow-4"
              : "bg-gray-3 text-gray-4 pointer-events-none"
          } ${
            isLoading
              ? "pointer-events-none cursor-wait opacity-80"
              : "pointer-events-auto cursor-pointer opacity-100"
          } `}
        >
          {isLoading ? <SpinnerLoading size={2.2} /> : "تائید"}
        </button>
      </div>
    </div>
  );
};

export default Register;
