import React from "react";
import { Bearport } from "../assets";
import "./Components.css";

const DisplayCampaigns = ({ title, desc, date, goal }) => {
  return (
    <div className="justify-center flex-wrap mt-[0px] flex">
      <div className="card">
        <img src={Bearport} alt="" className="w-[100%] h-auto mx-auto" />
        <div className="p-5">
          <h2 className="subpixel-antialiased font-extrabold  font-sans">
            {title}
          </h2>
          <p className="font-semibold  mt-1"> {desc}... </p>

          <div className="flex gap-3 my-2">
            <h3 className="font-semibold"> {date} </h3>
            <h2 className="font-semibold font-serif">
              {" "}
              <em className="font-bold">{goal}</em>
            </h2>
          </div>

          {/* //   id="btn" */}
          <div className="flex gap-4">
            <button className="flex pl-3 p-[8px] rounded-md mt-[6px] text-[#040f3dcc1] bg-[#afcee2] shadow-md hover:bg-opacity-60">
              See more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCampaigns;
