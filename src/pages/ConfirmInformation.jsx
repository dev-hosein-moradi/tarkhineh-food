import React, { Fragment, lazy } from "react";
import ConfirmInformationContent from "../components/ConfirmInformationContent";

const Navbar = lazy(() => import("../components/Navbar"));
const Register = lazy(() => import("../components/Register"));
const SearchPopUp = lazy(() => import("../components/SearchPopUp"));
const ShoppingCartContent = lazy(() =>
  import("../components/ShoppingCartContent")
);
const Footer = lazy(() => import("../components/Footer"));

const ConfirmInformation = ({
  searchPop,
  setSearchPop,
  darkEffect,
  menuSwitcher,
  setMenuSwitcher,
  registerPop,
  setRegisterPop,
}) => {
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

      {/* main content */}
      <div className="relative font-estedad">
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

        {/* main content of menu page */}
        <main className="h-auto py-[16px] px-[20px] max-w-[1024px] mx-auto">
          <ConfirmInformationContent setRegisterPop={setRegisterPop} />
        </main>

        {/* footer section */}
        <section
          className={`w-full bg-footer-img bg-blend-darken bg-no-repeat bg-cover bg-center ${
            darkEffect && "dark-bg-popups"
          } ease-in-out duration-300`}
        >
          <Footer />
        </section>
      </div>
    </Fragment>
  );
};

export default ConfirmInformation;
