import React, { use, useState } from "react";
import ToolCard from "../ChildComponent/ToolCard";

const PremiumTools = ({ getTools }) => {
  const tools = use(getTools);
  console.log(tools);
  
  return (
    <section className="mt-10 mb-10">
      <h3 className="text-center text-[#101727] text-4xl font-bold ">
        Premium Digital Tools
      </h3>
      <p className="text-center text-[#627382] mt-5">
        Choose from our curated collection of <br /> premium digital products
        designedto boost your productivity and creativity.
      </p>
      <div className="btnPremium flex justify-center gap-5 mt-10">
        <button className="btn btn-active btn-primary">Products</button>
        <button className="btn btn-active">Cart</button>
      </div>
      <div className=" grid grid-cols-3">
        {tools.map((tool, toolIndex) => (
          <ToolCard tool={tool}key={toolIndex}/>
        ))}
      </div>
    </section>
  );
};

export default PremiumTools;
