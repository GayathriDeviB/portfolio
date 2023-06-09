import React from "react";
import Portfoliohero from "../components/portfoliohero/portfoliohero";
import Portfolioprojects from "../components/portfolioprojects/portfolioprojects";
import Portfolioreviews from "../components/portfolioreviews/portfolioreviews";

const Portfoliopage = () => {
  return (
    <>
      <Portfoliohero />
      <div className="proj_rev">
        <Portfolioprojects />
        <Portfolioreviews />
      </div>
    </>
  );
};
export default Portfoliopage;
