import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import UserCounts from "./components/UserCounts";
import PremiumTools from "./components/PremiumTools";
import Card from "./ChildComponent/Card";

// premium
const getTools = async () => {
  const res = await fetch("/model.json");
  return res.json();
};
const getModelTools = getTools();
// premium

// ......................................................................
const App = () => {
  // navItems
  const navItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];
  // navItems

  // usercount
  const userCounts = [
    { id: 1, userCount: "50k", userTitle: "Active Users" },
    { id: 2, userCount: "200+", userTitle: "Premium Tools" },
    { id: 3, userCount: "4.9", userTitle: "Rating" },
  ];
  // usercount
  // card
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
  // card

  return (
    <>
      <Navbar items={navItems} />
      <Banner />
      <UserCounts userCounts={userCounts} />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("model")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {activeTab === "model" && (
        <PremiumTools
          getTools={getModelTools}
          carts={carts}
          setCarts={setCarts}
        />
      )}
      {activeTab === "cart" && <Card carts={carts} setCarts={setCarts} />}
    </>
  );
};

export default App;
