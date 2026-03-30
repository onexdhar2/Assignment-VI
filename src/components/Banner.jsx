import React from "react";
import bnrImg from "../assets/banner.png";
import Button from "../ChildComponent/Button";
const Banner = () => {
  return (
    <>
      <div className="banner flex justify-around items-center mt-10">
        <div className="bannerContent">
          <p className="text-[#4F39F6]">New: AI-Powered Tools Available</p>
          <h1 className="text-[#101727] font-bold text-7xl mb-5">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="bannerbtn">
            <button>button</button>
            <button>button</button>
          </div>
        </div>
        <img src={bnrImg} alt="" />
      </div>
    </>
  );
};

export default Banner;
