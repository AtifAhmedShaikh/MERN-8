import React from "react";
import BottomBar from "../Navbars/BottomBar";
import Container from "../Containers/Container";
import NotificationCard from "../components/cards/NotificationCard";
import BackBar from "../Navbars/BackBar";
const Notifications = () => {
  return (
    <React.Fragment>
      <BackBar pageLabel={"Notifications"}/>
      <Container className="flex justify-start flex-col items-center py-3">
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
      </Container>
      <BottomBar />
    </React.Fragment>
  );
};

export default Notifications;
