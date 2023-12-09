import React, { Fragment, lazy } from "react";
import { PageWrapper } from "../hoc";

const MenuContent = lazy(() => import("../components/MenuContent"));

const MenuMain = () => {
  return (
    <Fragment>
      <MenuContent />
    </Fragment>
  );
};

export default PageWrapper(MenuMain, "MenuMain", "menu");
