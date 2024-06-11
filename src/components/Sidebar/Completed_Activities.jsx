import React from "react";

function Completed_Activities(props) {
  return (
    <div>
      <div className=" mt-4 flex justify-between">
        <p className=" text-base font-medium">Completed Activities (14)</p>
        <p className=" text-gray-600 text-xs underline right-0 pt-1">
          View All
        </p>
      </div>
      <div className=" border-2 border-gray-300 my-2 text-sm rounded text-gray-500">
        <div className=" p-3 text-wrap ">
          <span className=" text-blue-800">Gurpreet Singh </span>(Dispatch Team)
          has created{" "}
          <span className=" font-medium text-black">Load No. H-AAA-1325</span>
        </div>
        <hr />
        <div className=" p-3">
          <span className=" text-blue-800">Aman </span>(Driver)
          <span className=" font-medium text-black"> Picked Up </span>
          goods at
          <span className=" font-medium text-black"> Location Name </span>
          <span>Load No. H-AAA-1325</span>
        </div>
        <hr />
        <div className=" p-3 ">
          <span className=" text-blue-800">Gurpreet Singh </span>(Dispatch Team)
          has created{" "}
          <span className=" font-medium text-black">Load No. H-AAA-1325</span>
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

export default Completed_Activities;
