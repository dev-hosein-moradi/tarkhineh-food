import React, { Fragment, lazy } from "react";
import { PageWrapper } from "../hoc";

const BranchsContent = lazy(() => import("../components/BranchsContent"));

const BranchMain = () => {
  return (
    <Fragment>
      <BranchsContent />
    </Fragment>
  );
};

export default PageWrapper(BranchMain, "BranchMain");
