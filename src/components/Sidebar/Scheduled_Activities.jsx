import React from "react";

function Scheduled_Activities(props) {
  return (
    <div>
      <div className=" mt-5 flex justify-between">
        <p className=" text-base font-medium">Scheduled Activities (14)</p>
        <p className=" text-gray-600 text-xs underline right-0 pt-1">
          View All
        </p>
      </div>
      <div className=" border-2 border-gray-300 my-2 text-sm rounded text-gray-500">
        <div className=" p-3 text-wrap ">
          <span className=" font-medium text-black">Load No. H-AAA-1325 </span>
          will be <span className=" font-medium text-black">delivered by </span>
          <span className=" text-blue-800">Aman </span>(Driver)
        </div>
        <hr />
        <div className=" p-3 ">
          <span className=" text-blue-800">Aman </span>(Driver) will
          <span className=" font-medium text-black"> Picked Up </span> at
          <span className=" font-medium text-black"> Location_Name </span> for
          <span className=" font-medium text-black"> Load No. H-AAA-1325</span>
        </div>
        <hr />
        <div className=" p-3 ">
          <span className=" font-medium text-black">Load No. H-AAA-1325</span>{" "}
          will start added by
          <span className=" text-blue-800"> Gurpreet Singh </span>
        </div>
        <hr />
        <div className=" p-3 ">
          <span className=" font-medium text-black">Load No. H-AAA-1325</span>{" "}
          will start added by
          <span className=" text-blue-800"> Gurpreet Singh </span>
        </div>
      </div>
    </div>
  );
}

export default Scheduled_Activities;
