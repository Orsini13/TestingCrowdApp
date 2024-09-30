import React from 'react'
import {Empty, FormCard } from '../Components'
import {useCampaigns} from '../Hooks'


const Home = () => {
    const {campaigns, addCampaigns} = useCampaigns();

  return (
    <div>

     <Empty />
        



    </div>
  )
}

export default Home