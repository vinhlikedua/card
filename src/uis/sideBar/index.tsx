import React from "react";
import ListSideBar from "./components/ListSideBar";
import BoxDashBoard from "./components/BoxDashBoard";

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <ListSideBar />
      <BoxDashBoard/>
    </div>
  );
};

export default Dashboard;