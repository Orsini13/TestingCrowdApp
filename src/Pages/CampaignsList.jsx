import React from 'react'
import { DisplayCampaigns, AnimatedPage } from "../Components";

import campaigns from "../Utils/campaign.json";



const CampaignsList = () => {
  return (
    <div>
        <AnimatedPage>
        <div className="grid grid-cols-1 gap-4 items-center lg:grid-cols-2 xl:grid-cols-3">
          {campaigns.map((campaign, index) => (
            <DisplayCampaigns
              key={index}
              title={campaign.title}
              desc={campaign.desc}
              deadline={campaign.deadline}
              goal={campaign.goal}
            />
          ))}
        </div>
      </AnimatedPage>


    </div>
  )
}

export default CampaignsList