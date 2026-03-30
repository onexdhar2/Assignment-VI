import React from "react";
import { toast } from "react-toastify";

const Card = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Item Procced")
  };
  const handleDelet = (item) => {
    const filteredArray = carts.filter((c) => c.id != item.id);
    setCarts(filteredArray);
    toast.success("Item Deleted")
  };
  return (
    <div className="mt-20 mb-20">
      <h1>your</h1>
      {carts.length === 0 ? (
        <p>Emoty card</p>
      ) : (
        <>
          {carts.map((item) => (
            <div key={item.id}>
              <div className="flex justify-around">
                <div className="cont">
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </div>
                <button
                  onClick={() => {
                    handleDelet(item);
                  }}
                >
                  Delet
                </button>
              </div>
            </div>
          ))}
          <div className="total mt-10">
            <div className="totalPrice flex justify-around">
              <h2>total</h2>
              <h2>{totalPrice}</h2>
            </div>
            <button onClick={handlePayment} className="text-center">
              proced to chek
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
