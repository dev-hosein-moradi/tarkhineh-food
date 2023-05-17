// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkEffect, setDarkEffect] = useState(false);

  const [menuSwitcher, setMenuSwitcher] = useState(false);
  const [searchPop, setSearchPop] = useState(false);
  const [branchPop, setBranchPop] = useState(false);

  useEffect(() => {
    if (!menuSwitcher && !searchPop && !branchPop) {
      setDarkEffect(false);
    } else if (menuSwitcher || searchPop || branchPop) {
      setDarkEffect(true);
    }
  }, [branchPop, menuSwitcher, searchPop]);
  return (
    <div className="font-estedad">
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
    </div>
  );
};

export default App;
