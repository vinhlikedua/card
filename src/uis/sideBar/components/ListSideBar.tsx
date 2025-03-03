import React from "react";
import Link from "next/link";
import IconDashboard from "@/layout/assets/icons/IconDashboard";
import IconLogout from "@/layout/assets/icons/IconLogout";

const ListSideBar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md rounded-lg p-4">
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard">
            <button className="flex items-center w-full text-left p-3 mt-2 hover:bg-gray-100 rounded-lg transition">
              <span className="mr-3"><IconDashboard /></span> Dashboard
            </button>
          </Link>
        </li>
        <li>
          <Link href="/orders">
          <button className="flex items-center w-full text-left p-3 hover:bg-gray-100 rounded-lg transition">
          <span className="mr-3">🚚</span> Order List
            </button>
          </Link>
        </li>
        <li>
          <Link href="/track-orders">
            <button className="flex items-center w-full text-left p-3 hover:bg-gray-100 rounded-lg transition">
              <span className="mr-3">🚚</span> Track your orders
            </button>
          </Link>
        </li>
        <li>
          <Link href="/address">
            <button className="flex items-center w-full text-left p-3 hover:bg-gray-100 rounded-lg transition">
              <span className="mr-3">🏠</span> My address
            </button>
          </Link>
        </li>
        <li>
          <Link href="/account">
            <button className="flex items-center w-full text-left p-3 hover:bg-gray-100 rounded-lg transition">
              <span className="mr-3">👤</span> Account details
            </button>
          </Link>
        </li>
        <li>
          <button className="flex items-center w-full text-left p-3 hover:bg-red-500 hover:text-white rounded-lg transition">
            <span className="mr-3"><IconLogout /></span> Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListSideBar;
