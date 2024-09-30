import React from 'react'
import {empty, lighthouse} from '../assets'


const Empty = () => {
  return (
    <div className=' inline-block justify-center content-center items-center h-screen'>

    <img src={lighthouse} alt="" 
        className="w-full mb-5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
        />
    <h1 className='leading-[26px] text-[20px] font-epilogue font-bold '> Hey there!, There are no campaigns Yet. <br /> You can create one!!! </h1>

    </div>
  )
}

export default Empty