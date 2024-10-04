import React from 'react'
import { Bearport } from '../assets'
import { title } from 'framer-motion/client'
import campaigns from "../Utils/campaign.json";


const Camp = ({title, desc, deadline, goal}) => {
   return(
  <div className='flex flex-row gap-5 bg-opacity-5 m-auto bg-[#ECDFCC] p-2 '>
       
<div className='w-1/3'>
  <img src={Bearport} alt="" className='w-full' />
</div>

<div className='flex flex-col space-y-8  items-center w-2/3 py-2'>
  <h1 className='font-extrabold text-3xl text-white'> 
    {title}
  </h1>
  <h1 className=' text-xl text-white'> {desc}
  </h1>
  <div className='text-xl text-white flex flex-row gap-[500px] '>
      <h1>{deadline}</h1>
      <h1>{goal}</h1>
  </div>
</div>


</div>
)}

const CampaignDetails = () => {

  return (
    <div className="">
    {campaigns.map((campaign, index) => (
      <Camp
        key={index}
        title={campaign.title}
        desc={campaign.desc}
        deadline={campaign.deadline}
        goal={campaign.goal}
        
      />
    ))}
  </div>
  )
}

export default CampaignDetails