import React from "react";
import DoughnutChart from "./Doughnut_Chart";

function Graphs(props) {
  return (
    <div className=" my-3 w-full grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className=" col-span-1 border-2 bg-white rounded-xl h-[350px]">
        <p className=" font-medium px-3 py-1">Orders</p>
        <DoughnutChart />
        <div className=" grid-rows-3 gap-2">
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-yellow-400">
            <p>Upcoming</p>
            <p>50</p>
          </div>
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-indigo-500">
            <p>Ongoing</p>
            <p>100</p>
          </div>
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-teal-400">
            <p>Completed</p>
            <p>50</p>
          </div>
        </div>
      </div>
      <div className=" col-span-1 border-2 bg-white rounded-xl h-[350px]">
        <p className=" font-medium px-3 py-1">Trips</p>
        <DoughnutChart />
        <div className=" grid-rows-3 gap-2">
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-yellow-400">
            <p>Upcoming</p>
            <p>50</p>
          </div>
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-indigo-500">
            <p>Ongoing</p>
            <p>100</p>
          </div>
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-teal-400">
            <p>Completed</p>
            <p>50</p>
          </div>
        </div>
      </div>
      <div className=" col-span-1 border-2 bg-white rounded-xl h-[350px]">
        <p className=" font-medium px-3 py-1">Revenue</p>
        <DoughnutChart />
        <div className=" grid-rows-3 gap-2">
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-yellow-400">
            <p>Upcoming</p>
            <p>50</p>
          </div>
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-indigo-500">
            <p>Ongoing</p>
            <p>100</p>
          </div>
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-teal-400">
            <p>Completed</p>
            <p>50</p>
          </div>
        </div>
      </div>
      <div className=" col-span-1 border-2 bg-white rounded-xl h-[350px]">
        <p className=" font-medium px-3 py-1">Expenses</p>
        <DoughnutChart />
        <div className=" grid-rows-3 gap-2">
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-yellow-400">
            <p>Freight Charge</p>
            <p>50</p>
          </div>
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-indigo-500">
            <p>Driver Charge</p>
            <p>100</p>
          </div>
          <div className=" mb-3 flex justify-between mx-2 p-1 rounded-md bg-gradient-to-l from-teal-400">
            <p>Other Charges</p>
            <p>50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;
