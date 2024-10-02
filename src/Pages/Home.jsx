import React, { useState, useEffect } from "react";
import { DisplayCampaigns, Transition, AnimatedPage} from "../Components";

const Home = () => {
  // const [isLoading, setIsLoading]    = useState(false);
  // const [campaigns, setCampaign] =  useState([]);

  return (
    <div>
        <AnimatedPage>
           <DisplayCampaigns />

        </AnimatedPage>
      
    </div>
  );
};

export default Home;
