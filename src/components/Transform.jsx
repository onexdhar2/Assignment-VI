import React from "react";

const Transform = ({ pricing }) => {
  return (
    <>
      <div className="mt-10 mb-10">
        <h1 className="text-center mt-5 text-[#101727] text-5xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center mt-5 text-[#627382] mb-5">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        <div className="cards grid grid-cols-3 gap-10">
          {pricing.map((item,index) => (
            <div className="card  bg-base-200 p-10" key={index}>
              <h2 className="text-[#101727] text-2xl">{item.title}</h2>
              <p className="text-[#627382] mb-5">{item.description}</p>
              <div className="flex items-center">
                <p className="text-[#101727] font-bold text-3xl">{item.price}</p>
                <p className="text-[#627382]">{item.duration}</p>
              </div>
              <div className="text-[#627382]  mt-3 mb-10">
                {item.features.map((itm,idx)=>(
                  <p key={idx}>{itm}</p>
                ))}
              </div>
              <button className="btn btn-active bg-[#4F39F6] rounded-2xl text-white">
               {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transform;
