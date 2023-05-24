// eslint-disable-next-line no-unused-vars
import React, { Suspense, useEffect, useState } from "react";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Loading from "./pages/Loading";

const App = () => {
  const [darkEffect, setDarkEffect] = useState(false);

  const [menuSwitcher, setMenuSwitcher] = useState(false);
  const [searchPop, setSearchPop] = useState(false);
  const [branchPop, setBranchPop] = useState(false);
  const [registerPop, setRegisterPop] = useState(true);

  useEffect(() => {
    if (!searchPop && !branchPop && !registerPop) {
      setDarkEffect(false);
    } else if (searchPop || branchPop || registerPop) {
      setDarkEffect(true);
    }
  }, [branchPop, menuSwitcher, registerPop, searchPop]);

  /* set hidden to overflow-y body when hamberger menu is open */
  useEffect(() => {
    if (menuSwitcher || registerPop) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {};
  }, [menuSwitcher, registerPop]);

  console.log(registerPop);

  return (
    <div className="font-estedad">
      <Suspense fallback={<Loading />}>
        <section className={`${darkEffect && "dark-bg-popups"}`}>
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

        <Main
          searchPop={searchPop}
          setSearchPop={setSearchPop}
          branchPop={branchPop}
          setBranchPop={setBranchPop}
          darkEffect={darkEffect}
          menuSwitcher={menuSwitcher}
          setMenuSwitcher={setMenuSwitcher}
          registerPop={registerPop}
          setRegisterPop={setRegisterPop}
        />
      </Suspense>
    </div>
  );
};

export default App;
