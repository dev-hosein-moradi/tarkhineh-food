import React, { Fragment, lazy } from "react";
import { PageWrapper } from "../hoc";

const ShoppingCartContent = lazy(() =>
  import("../components/ShoppingCartContent")
);

const ShoppingCart = () => {
  return (
    <Fragment>
      <main className="h-auto py-[16px] px-[20px] max-w-[1024px] mx-auto">
        <ShoppingCartContent />
      </main>
    </Fragment>
  );
};

export default PageWrapper(ShoppingCart, "shoppingCart", "");
