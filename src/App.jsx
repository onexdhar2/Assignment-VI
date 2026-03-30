import React from "react";
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

  return (
    <>
      <Navbar items={navItems} />
      <Banner />
      <UserCounts userCounts={userCounts} />
      <PremiumTools getTools={getModelTools} />
      <Card/>
    </>
  );
};

export default App;
