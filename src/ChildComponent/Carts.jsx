// import Card from "./ChildComponent/Card";
// import React, { useState } from "react";
// const Carts = () => {
//   const [activeTab, setActiveTab] = useState("model");
//   const [carts, setCarts] = useState([]);
  
//   return (
//     <div>
//       <div className="tabs tabs-box justify-center bg-transparent">
//         <input
//           type="radio"
//           name="my_tabs_1"
//           className="tab rounded-full w-40"
//           aria-label="Products"
//           defaultChecked
//           onClick={() => setActiveTab("model")}
//         />
//         <input
//           type="radio"
//           name="my_tabs_1"
//           className="tab rounded-full w-40"
//           aria-label={`Cart (${carts.length})`}
//           onClick={() => setActiveTab("cart")}
//         />
//       </div>
//       {activeTab === "cart" && <Card carts={carts} setCarts={setCarts} />}
//     </div>
//   );
// };

// export default Carts;
