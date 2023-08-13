import React, { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Main from "./pages/Main";
import Loading from "./pages/Loading";
import { fetchFoods } from "./redux/actions/foodActions";
import { useDispatch, useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/Fallback";
import Notifications from "./components/Notifications";

const BranchMain = lazy(() => import("./pages/BranchMain"));
const MenuMain = lazy(() => import("./pages/MenuMain"));

const App = () => {
  const notification = useSelector((state) => state.notifications.notification);
  const dispatch = useDispatch();

  const [darkEffect, setDarkEffect] = useState(false);

  const [menuSwitcher, setMenuSwitcher] = useState(false);
  const [searchPop, setSearchPop] = useState(false);
  const [branchPop, setBranchPop] = useState(false);
  const [registerPop, setRegisterPop] = useState(false);

  const [someKey, setSomeKey] = useState(null);

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
          someKey={someKey}
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
          someKey={someKey}
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
          someKey={someKey}
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
    <ErrorBoundary
      FallbackComponent={<Fallback />}
      onReset={() => {
        setSomeKey(null);
        window.location.reload();
      }}
      resetKeys={["someKey"]}
    >
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          containerClassName=""
          toastOptions={{
            className: "",
            duration: 5000,
            success: {
              duration: 3000,
              theme: {
                primary: "#00966D",
                secondary: "black",
              },
              style: {
                background: "#fff",
                color: "#00966D",
                fontFamily: "estedad",
                fontWeight: "500",
                fontSize: "20px",
                border: "1px solid #00966D",
                padding: "10px",
              },
            },
            error: {
              duration: 3000,
              theme: {
                primary: "#C30000",
                secondary: "black",
              },
              style: {
                background: "#FFF2F2",
                color: "#C30000",
                fontFamily: "estedad",
                fontWeight: "500",
                fontSize: "20px",
                border: "1px solid #C30000",
                padding: "10px",
              },
            },
            loading: {
              duration: 2000,
              theme: {
                primary: "black",
                secondary: "gray",
              },
              style: {
                background: "#fff",
                color: "#000",
                fontFamily: "estedad",
                fontWeight: "500",
                fontSize: "20px",
                border: "1px solid #000",
                padding: "10px",
              },
            },
          }}
        />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
