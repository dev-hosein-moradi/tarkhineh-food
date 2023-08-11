import React, { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/Main";
import Loading from "./pages/Loading";

const BranchMain = lazy(() => import("./pages/BranchMain"));
const MenuMain = lazy(() => import("./pages/MenuMain"));

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
          setDarkEffect={setDarkEffect}
        />
      ),
      errorElement: <h1>404 NOT FOUND!</h1>,
    },
    {
      path: "/branch/:branchName",
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
      path: "/branch/:branchName/menu",
      element: (
        <MenuMain
          searchPop={searchPop}
          setSearchPop={setSearchPop}
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
      path: "/*",
      element: <h1>you dont have permission to visit this page!</h1>,
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
