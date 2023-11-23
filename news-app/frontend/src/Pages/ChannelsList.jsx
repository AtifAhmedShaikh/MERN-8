import React from 'react'
import Container from "../Containers/Container"
import BottomBar from "../Navbars/BottomBar"
import ChannelCard from '../components/cards/ChannelCard'
import BackBar from '../Navbars/BackBar'
const ChannelsList = () => {
  return (
    <React.Fragment>
      <BackBar pageLabel={"Channels"}/>
      <Container className="w-full flex flex-wrap px-0 py-2 gap-3 justify-center">
        <ChannelCard/>
        <ChannelCard/>
        <ChannelCard/>
        <ChannelCard/>
        <ChannelCard/>
      </Container>
      <BottomBar/>
    </React.Fragment>
  )
}

export default ChannelsList