"use client";
import React, { useState } from "react";
import { CartItem } from "./data";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

interface CartItemProps {
  item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="flex items-center justify-between border-b py-4 px-4">
      <input type="checkbox" className="mr-4" />
      <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
      <div className="flex-1 ml-4">
        <p className="font-semibold">{item.name}</p>
        <p className="text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
        className="w-16 text-center border rounded"
      />
      <span className="font-bold text-green-600">${(item.price * quantity).toFixed(2)}</span>
      <button className="text-red-500">
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItemComponent;