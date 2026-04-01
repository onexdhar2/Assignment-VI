import React, { use } from "react";
import ToolCard from "../ChildComponent/ToolCard";

const PremiumTools = ({ getTools, carts, setCarts }) => {
  const tools = use(getTools);

  return (
    <section className="mt-10 mb-10">
      <h3 className="text-center text-[#101727] text-4xl font-bold ">
        Premium Digital Tools
      </h3>
      <p className="text-center text-[#627382] mt-5">
        Choose from our curated collection of <br /> premium digital products
        designedto boost your productivity and creativity.
      </p>
      <div className=" grid grid-cols-3 gap-10 p-10">
        {tools.map((tool, toolIndex) => (
          <ToolCard
            tool={tool}
            key={toolIndex}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </section>
  );
};

export default PremiumTools;
