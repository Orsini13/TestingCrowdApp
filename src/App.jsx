import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './index.css'
import { Home, Profile, CreateCampaigns, CampaignDetails,FundCard } from './Pages' ;
import {Sidebar , Navbar, } from './Components'

const  App = () => {

  return (
   <div className='relative sm:-8 p-4 bg-[#c2bdf3] min-h-screen flex flex-row'>
      {/* <div className='sm:flex hidden mr-10 relative'>
        <Sidebar/>
      </div> */}


      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
          <Navbar />
          
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/create-campaign' element={<CreateCampaigns  />}/>
            <Route path='/Campaing-details/:id' element={<CampaignDetails/>}/>
            <Route path='/FundCard' element={<FundCard />}/>
          </Routes>

      </div>
   </div>

  )

}

export default App
