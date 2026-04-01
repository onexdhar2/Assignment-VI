import React, { useState } from "react";
import { toast } from "react-toastify";

const ToolCard = ({ tool, toolIndex, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);
  const handleSetIsBuy = () => {
    setIsBuy(true);
    setCarts([...carts, tool]);
    toast.success("Item Added To Card");
  };
  return (
    <div>
      <div key={toolIndex} className="mt-10 card bg-base-200 shadow-md p-5">
        <div className="flex justify-between">
          <img src={tool.icon} alt="image" />
          <p className="bg-[#FEF3C6] p-2 rounded-2xl uppercase  mt-4text-[#BB4D00]">
            {tool.tag}
          </p>
        </div>
        <p className="text-extrabold text-2xl text-[#101727]">
          {tool.name}
        </p>
        <p className="text-[#627382] mt-4">{tool.description}</p>
        <div className="flex gap-1">
          <p className="text-[#101727] mt-4 font-extrabold">${tool.price}</p>
          <p className="text-[#627382] mt-4">/{tool.period}</p>
        </div>
        <div>
          {tool.features.map((item, index) => (
             <h1 key={index}>{item}</h1>
          ))}
        </div>
        <button
          onClick={handleSetIsBuy}
          className="btn btn-active btn-primary mt-4"
        >
          {isBuy ? "Selected" : "Buy"}
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
