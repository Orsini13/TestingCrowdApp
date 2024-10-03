import React, { useState, useEffect } from "react";
import { herobg } from "../assets";
import { AnimatedPage } from "../Components";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  return (
    <AnimatedPage>

    <div className="flex justify-between pt-12">
      <div className="flex flex-col space-y-7 justify-start items-start">
        <h1 className="font-black text-4xl text-gray-100">
          Welcome To Yonder 
        </h1>
        <h2 className="font-normal text-2xl text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores accusantium eius laudantium aliquam veniam incidunt tempora ipsum! Dolores officia animi nobis eum enim obcaecati dolorum,.
        </h2>

        <Link to="/campaigns-list">
        <button className="text-[#3C3D37] bg-gray-100 py-3 px-7 rounded-lg font-bold hover:bg-opacity-80">
          Explore
        </button>
        </Link>
        

      </div>


      <img src={herobg} alt="" className="flex items-end ml-auto" />
    </div>
    </AnimatedPage>

  );
};

export default Home;
