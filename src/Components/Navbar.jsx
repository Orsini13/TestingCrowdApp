import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CustomButton, Transition, AnimatedPage } from "./";
import {  menu, search, thirdweb, tronlogo } from "../assets";
import { navlinks } from "../Constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const address = "0xabc";

  return (
    
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[30px] gap-6">
      {/* big screen input and search  */}

      <div className="lg:flex-1 flex flex-row  max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px] ">
        <input
          type="text"
          placeholder="Search for campaings"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#557188] text-white bg-transparent outline-none placeholder:p-2"
        />

        <div className="w-[72px] h-full rounded-[20px] bg-[#1f88d9] flex justify-center items-center cursor-pointer">
          <img
            src={search}
            alt=""
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      {/* big screen screen button and logo */}
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton
          btnType="button"
          title={address ? "Create a campaign" : "Connect"}
          styles={address ? " bg-[#1f88d9] " : " bg-[#2bdb49cc] "}
          handleClick={() => {
            if (address) navigate("create-campaign");
            else "connect()";
          }}
        />

        <Link to="/home">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src={tronlogo}
              alt="user"
              className="w-[60%] h-[60%] object-contain "
            />
          </div>
        </Link>
      </div>

      {/* small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        
      <Link to="/home">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={tronlogo}
            alt="user"
            className="w-[60%] h-[60%] object-contain "
          />
        </div>
        </Link>
       
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
      

        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700 `}
          >
          <ul className="mb-4">
            {navlinks.map((Link) => (
              <li
              key={Link.name}
              className={`flex p-4 ${
                isActive === Link.name && "bg-[#3a3a43]"
              }`}
                onClick={() => {
                  setIsActive(Link.name);
                  setToggleDrawer(false);
                  navigate(Link.link);
                }}
              >
                <img
                  src={Link.imgUrl}
                  alt=""
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === Link.name ? "grayscale-0" : "grayscale"
                  }`}
                  />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === Link.name ? `text-[#1f88d9]` : `text-[#808191]`
                  }`}
                  >
                  {" "}
                  {Link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4 my-4">
            <CustomButton
              btnType="button"
              title={address ? "Create a campaign" : "Connect"}
              styles={address ? "bg-[#1f88d9" : "bg-[#23b410]"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else "connect()";
              }}
            />
          </div>
        </div>
              
      </div>
    </div>
      
  );
};

export default Navbar;
