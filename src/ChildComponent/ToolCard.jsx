import React, { useState } from "react";

const ToolCard = ({ tool, toolIndex, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);
  const handleSetIsBuy = () => {
    setIsBuy(true);
    setCarts([...carts, tool]);
  };
  return (
    <div>
      <div key={toolIndex} className="mt-10">
        <div className="flex">
          <img src={`/${tool.icon}`} alt="image" />
          <p>{tool.tag}</p>
        </div>
        <p className="text-extrabold text-2xl text-[#101727]">{tool.name}</p>
        <p className="text-[#627382]">{tool.description}</p>
        <div className="flex gap-1">
          <p className="text-[#101727] font-extrabold">${tool.price}</p>
          <p className="text-[#627382]">/{tool.period}</p>
        </div>
        <p>{tool.features}</p>
        <button onClick={handleSetIsBuy} className="btn btn-active btn-primary">
          {isBuy ? "Selected" : "Buy"}
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
