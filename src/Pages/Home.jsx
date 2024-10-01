import React, {useState, useEffect} from 'react'
import {DisplayCampaigns} from '../Components'

const Home = ({ isOpen, onClose, handleSubmit, buttonLabel, title, description }) => {

  // const [isLoading, setIsLoading]    = useState(false);
  // const [campaigns, setCampaign] =  useState([]);

  
  return (
    <div>
      <DisplayCampaigns />
    </div>
  )
}

export default Home