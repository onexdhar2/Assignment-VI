import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="flex justify-around items-center">
        <div className="mb-12 mt-12">
          <h1 className="font-bold text-2xl mb-5">DigiTools</h1>
          <p>
            Premium digital tools for creators,<br /> professionals, and businesses.
            Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h2 className="text-2xl">Product</h2>
          <h2>Features</h2>
          <h2>Pricing</h2>
          <h2>Templates</h2>
          <h2>Integrations</h2>
        </div>
        <div>
          <h2 className="text-2xl">Company</h2>
          <h2>About</h2>
          <h2>Blog</h2>
          <h2>Careers</h2>
          <h2>Press</h2>
        </div>
        <div>
          <h2 className="text-2xl">Resources</h2>
          <h2>Documentation</h2>
          <h2>Help Center</h2>
          <h2>Community</h2>
          <h2>Contact</h2>
        </div>
        <div>
          <h2 className="text-2xl">Social Links</h2>
          <div className="flex justify-around mt-5">
            <FaFacebookF />
            <FaInstagramSquare />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
