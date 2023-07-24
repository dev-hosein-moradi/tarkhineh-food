// eslint-disable-next-line no-unused-vars
import React, { Suspense, useEffect, useState } from "react";
import Main from "./pages/Main";
import Loading from "./pages/Loading";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BranchMain from "./pages/BranchMain";
import MenuMain from "./pages/MenuMain";

const App = () => {
  const [darkEffect, setDarkEffect] = useState(false);

  const [menuSwitcher, setMenuSwitcher] = useState(false);
  const [searchPop, setSearchPop] = useState(false);
  const [branchPop, setBranchPop] = useState(false);
  const [registerPop, setRegisterPop] = useState(false);

  /* browser router */
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
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
      ),
      errorElement: <h1>404 NOT FOUND!</h1>,
    },
    {
      path: "branch/:branchName",
      element: (
        <BranchMain
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
      ),
      errorElement: <h1>404 NOT FOUND!</h1>,
    },
    {
      path: "branch-menu",
      element: <MenuMain />,
      errorElement: <h1>404 NOT FOUND!</h1>,
    },
  ]);

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

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
