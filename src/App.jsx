// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";

const App = () => {
  const [menuSwitcher, setMenuSwitcher] = useState(false);
  const [searchPop, setSearchPop] = useState(true);
  return (
    <div className="font-estedad">
      <Navbar
        menuSwitcher={menuSwitcher}
        setMenuSwitcher={setMenuSwitcher}
        searchPop={searchPop}
        setSearchPop={setSearchPop}
      />
      <Main searchPop={searchPop} setSearchPop={setSearchPop} />
    </div>
  );
};

export default App;
