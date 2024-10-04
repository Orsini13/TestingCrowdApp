import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './index.css'
import { Home, Profile, CreateCampaigns, CampaignDetails,FundCard, CampaignsList } from './Pages' ;
import {Sidebar , Navbar, } from './Components'
import { AnimatePresence } from 'framer-motion';

const  App = () => {

  return (
   <div className='relative sm:-8 p-4  bg-gradient-to-r from-customGray to-customGreen min-h-screen flex flex-row'  >
      {/* <div className='sm:flex hidden mr-10 relative'>
        <Sidebar/>
      </div> */}


      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
          <Navbar />
          
          <AnimatePresence mode='wait'>
           <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/create-campaign' element={<CreateCampaigns  />}/>
            <Route path='/Campaign-details/:id' element={<CampaignDetails/>}/>
            <Route path='/FundCard' element={<FundCard />}/>
            <Route path='/Campaigns-list' element={<CampaignsList />}/>
           </Routes>
          </AnimatePresence>

       

      </div>
   </div>

  )

}

export default App
