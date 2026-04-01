import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import UserCounts from "./components/UserCounts";
import PremiumTools from "./components/PremiumTools";
import Card from "./ChildComponent/Card";
import Steps from "./components/Steps";
import Transform from "./components/Transform";
import Trans from "./components/Trans";
import Footer from "./components/footer";

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
  // steps
  const stepsCard = [
    {
      id: 1,
      icon: "/user.png",
      title: "Create Account",
      des: "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: 2,
      icon: "/package.png",
      title: "Choose Products",
      des: "Browse our catalog and select the toolsthat fit your needs.",
    },
    {
      id: 3,
      icon: "/rocket.png",
      title: "Start Creating",
      des: "Download and start using your premium tools immediately.",
    },
  ];
  // steps
  // pricing
  const pricing = [
    {
      id: 1,
      title: "Starter",
      price: "$0/",
      duration: "Month",
      description: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
    },
    {
      id: 2,
      title: "Pro",
      price: "$29/",
      duration: "Month",
      description: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
      popular: true,
    },
    {
      id: 3,
      title: "Enterprise",
      price: "$99/",
      duration: "Month",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      button: "Contact Sales",
    },
  ];
  // pricing
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
      <div className="tabs tabs-box justify-center bg-transparent mt-10">
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
      {activeTab === "cart" && <Card carts={carts} setCarts={setCarts} />}

      {activeTab === "model" && (
        <PremiumTools
          getTools={getModelTools}
          carts={carts}
          setCarts={setCarts}
        />
      )}
      <Steps stepsCard={stepsCard} />
      <Transform pricing={pricing} />
      <Trans />
      <Footer />
    </>
  );
};

export default App;
