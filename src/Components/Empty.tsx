import React from 'react'
import {empty} from '../assets'


const Empty = () => {
  return (
    <div className='    justify-center items-center '>

    <img src={empty} alt="" 
    className='w-[400px]'
    />
    <h1 className='leading-[26px] text-[16px] font-epilogue font-bold '> Hey there!, There are no campaigns Yet. <br /> You can create one!!! </h1>

    </div>
  )
}

export default Empty