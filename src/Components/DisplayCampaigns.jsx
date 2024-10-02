import React from 'react'
import { Bearport } from '../assets'
import './Components.css'

const DisplayCampaigns = () => {

  return (
    <div className='justify-center flex-wrap mt-[0px] flex'  >
        <div className='card'>
            <img src={Bearport} alt="" className='w-[100%] h-auto mx-1 my-1'/>
            <div className="p-2" >
                <h2 className='subpixel-antialiased font-extrabold  font-sans'>HAILING THE BEAR</h2>
                <p className='font-semibold font-epilogue mt-1'> In his magnificance and his fury, we start now to adore our one and only bear... </p>

                <div className='flex gap-3 my-2'>
                    <h3 className='font-semibold'> 13-12-24 </h3>
                    <h2 className='font-semibold font-serif'> <em className='font-bold'>4.5</em> Tron</h2>
                </div>
                
                <div className='flex gap-4'>
                    <button id='btn' className='flex p-[8px] rounded-sm mt-[6px] text-[#040f3dcc1] bg-[#afcee2]'>
                        See more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                        </button>   
                </div>
                


            </div>
        </div>
    </div>
    
  )
}

export default DisplayCampaigns