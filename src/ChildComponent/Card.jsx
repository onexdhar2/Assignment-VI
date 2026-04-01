import React from "react";
import { toast } from "react-toastify";

const Card = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Item Procced");
  };
  const handleDelet = (item) => {
    const filteredArray = carts.filter((c) => c.id != item.id);
    setCarts(filteredArray);
    toast.success("Item Deleted");
  };
  return (
    <div className="mt-20 mb-20">
      <h3 className="text-center text-[#101727] text-4xl font-bold ">
        Premium Digital Tools
      </h3>
      <p className="text-center text-[#627382] mt-5">
        Choose from our curated collection of <br /> premium digital products
        designedto boost your productivity and creativity.
      </p>
      <h1 className="text-center mt-10 text-[#101727] font-bold text-2xl"> Your Cart</h1>
      {carts.length === 0 ? (
        <p className="text-center mt-10 text-2xl">NOT AVAILABLE !</p>
      ) : (
        <>
          {carts.map((item) => (
            <div key={item.id}>
              <div className="flex justify-around">
                <div className="cont">
                  <h2 className="text-[#101727] font-semibold text-2xl mt-10">{item.name}</h2>
                  <p className="text-[#627382] text-[20px]">${item.price}</p>
                </div>
                <button className="text-[#FF3980]"
                  onClick={() => {
                    handleDelet(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="total mt-10">
            <div className="totalPrice flex justify-around">
              <h2 className="mb-10 text-[#627382] text-[20px]">Total</h2>
              <h2>${totalPrice}</h2>
            </div>
            <div className="flex justify-center">
              <button onClick={handlePayment} className="text-center btn btn-primary">
              Proceed to Checkout
            </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
