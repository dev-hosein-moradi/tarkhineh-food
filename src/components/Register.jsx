/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { lazy, useEffect, useReducer, useState } from "react";
import Logo from "../assets/image/Logo.svg";

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

  /* handler for return to prev section */
  const returnSectionHandler = () => {
    setStep(1);
  };
  return (
    <div className="p-4 flex flex-col items-center">
      {/* btn handler */}
      <div className="w-full h-[150px] flex flex-row items-start justify-between">
        <span
          className="w-[35px] cursor-pointer"
          onClick={() => handleDisplayRegisterPop()}
        >
          <SvgCloseSolid width={30} height={30} />
        </span>

        <span
          onClick={returnSectionHandler}
          className="w-[35px] pt-[2.5px] cursor-pointer"
        >
          <SvgArrowRightColor width={35} height={30} />
        </span>
      </div>

      {/* brand */}
      <img className="w-[200px] h-[60px] my-8 " alt="logo" src={Logo} />

      <div
        className={`flex flex-col items-center w-full ${
          step === 1 ? "animate-leftToRight translate-x-[0]" : "animate-reverseLeftToRight -translate-x-[100%]"
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
          className={`w-[320px] h-[40px] font-medium text-base rounded-md ease-in-out duration-300 ${
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
    </div>
  );
};

export default Register;
