import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(orders + 1);

  return (
    <li className="m-3 d-flex justify-content-center">
      {orderType} : {orders} <RestaurantButton onClick={orderOne} />
    </li>
  );
};

export default Order;
