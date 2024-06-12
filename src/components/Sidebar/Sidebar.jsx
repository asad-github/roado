import React from "react";
import Completed_Activities from "./Completed_Activities";
import Scheduled_Activities from "./Scheduled_Activities";

function Sidebar(props) {
  return (
    <div className=" bg-white w-[350px] right-0 flex-shrink-0">
      <div className=" m-3">
        <p className=" text-lg font-medium">Todays Highlights (14)</p>
        <p className=" text-xs text-gray-500">19 Mar 2024</p>
        {/* income and expense section */}
        <div className=" mt-3 grid grid-cols-2 gap-3">
          <div className=" col-span-1 border-gray-300 border-2 rounded-md p-2">
            <p>Income</p>
            <p className=" text-green-600 text-2xl">100000 CAD</p>
            <p className=" text-gray-400 text-xs">2 payments received</p>
          </div>
          <div className=" col-span-1 border-gray-300 rounded-md border-2 p-2">
            <p>Expenses</p>
            <p className=" text-red-600 text-2xl">50000 CAD</p>
            <p className=" text-gray-400 text-xs">5 payments paid</p>
          </div>
        </div>

        {/* Completed Activities  */}
        <Completed_Activities />

        {/* Scheduled Activities Activities  */}
        <Scheduled_Activities />
      </div>
    </div>
  );
}

export default Sidebar;
