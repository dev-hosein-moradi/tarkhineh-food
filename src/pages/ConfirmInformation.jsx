import React, { Fragment } from "react";
import ConfirmInformationContent from "../components/ConfirmInformationContent";
import { PageWrapper } from "../hoc";

const ConfirmInformation = () => {
  return (
    <Fragment>
      <main className="h-auto py-[16px] px-[20px] max-w-[1024px] mx-auto">
        <ConfirmInformationContent setRegisterPop={setRegisterPop} />
      </main>
    </Fragment>
  );
};

export default PageWrapper(ConfirmInformation, "ConfirmInformation", "");
