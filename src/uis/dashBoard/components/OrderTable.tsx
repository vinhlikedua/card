import React from "react";
import OrderRow from "./OrderRow";
import { orders } from "./data";

const OrderTable: React.FC = () => {
  return (
    <div className="w-full bg-white mt-6 mb-16 p-6 rounded-lg shadow-md">
      <h2 className="text-text-heading text-heading-3 font-quicksand font-bold mb-4">
        Recent Orders
      </h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-text-medium font-quicksand text-text-heading">
            <th className="py-3 px-4 border-b">Order ID</th>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Status</th>
            <th className="py-3 px-4 border-b">Total</th>
            <th className="py-3 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
