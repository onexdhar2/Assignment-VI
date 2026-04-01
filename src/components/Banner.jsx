import bnrImg from "../assets/banner.png";
const Banner = () => {
  return (
    <>
      <div className="banner flex justify-around items-center mt-10">
        <div className="bannerContent">
          <p className="text-[#4F39F6] bg-[#c8c3ed] w-2xs pl-5 rounded-3xl">
            New: AI-Powered Tools Available
          </p>
          <h1 className="text-[#101727] font-bold text-7xl mb-5">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="bannerbtn mt-5 rou">
            <button className="btn btn-soft btn-primary rounded-4xl ">Explore Products</button>
            <button className="btn btn-soft ml-5 rounded-4xl ">Watch Demo</button>
          </div>
        </div>
        <img src={bnrImg} alt="" />
      </div>
    </>
  );
};

export default Banner;
