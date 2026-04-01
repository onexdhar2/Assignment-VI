import React from "react";

const Steps = ({ stepsCard }) => {
  return (
    <div className="text-center mt-10 mb-10">
      <h1 className="text-[#101727] text-5xl font-bold mb-5">Get Started in 3 Steps</h1>
      <p className="text-[#627382] mb-5">Start using premium digital tools in minutes, not hours.</p>
      <div className="flex justify-center gap-5">
        {stepsCard.map((item, index) => (
        <div className=" bg-base-200 p-5" key={index}>
          <p className="bg-[#4F39F6] w-10  text-center text-white rounded-4xl">{item.id}</p>
          {/* <img src="" alt="" /> */}
          <h1 className="text-[#101727] text-2xl">{item.title}</h1>
          <p className="text-[#627382]">{item.des}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Steps;
