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

  useEffect(() => {
    if (!searchPop && !branchPop) {
      setDarkEffect(false);
    } else if (searchPop || branchPop) {
      setDarkEffect(true);
    }
  }, [branchPop, menuSwitcher, searchPop]);

  /* set hidden to overflow-y body when hamberger menu is open */
  useEffect(() => {
    if (menuSwitcher) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {};
  }, [menuSwitcher]);

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
          />
        </section>

        <Main
          searchPop={searchPop}
          setSearchPop={setSearchPop}
          branchPop={branchPop}
          setBranchPop={setBranchPop}
          darkEffect={darkEffect}
        />
      </Suspense>
    </div>
  );
};

export default App;
