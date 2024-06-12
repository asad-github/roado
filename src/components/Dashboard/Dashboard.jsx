import React from "react";
import Graphs from "./Graphs";
import Topbar from "./Topbar";
import Quick_Actions from "./Quick_Actions";
import Bottom_Container from "./Bottom_Container";

function Dashboard(props) {
  return (
    <div className=" m-5 flex-grow">
      <div className=" flex justify-between">
        <p className=" text-3xl">Dashboard</p>
        <Topbar />
      </div>
      <Graphs />
      <Quick_Actions />
      <Bottom_Container />
    </div>
  );
}

export default Dashboard;
