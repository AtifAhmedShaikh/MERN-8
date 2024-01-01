import React, { useEffect, useState } from "react";
import BackBar from "../../components/Navbar/BackBar.jsx";
import Container from "../../containers/Container.jsx";
import Button from "../../components/UI/Button.jsx";
import RequestCard from "../../components/Cards/RequestCard.jsx";
import api from "../../config/apiConfig.js";
const DashBoard = () => {
  const [requestList, setRequestList] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await api.get("/api/v1/channels/all");
      setRequestList(response?.data?.channels);
    })();
  }, []);
  return (
    <React.Fragment>
      <BackBar pageLabel={"DashBoard"} />
      <Container
        className={"w-full px-2 flex flex-col items-center text-center"}
      >
        <h3 className="text-2xl font-bold mb-5 mt-3">
          {" "}
          Request for Creating a Channel{" "}
        </h3>
        <div className="min-w-[55%]">
          <div className="flex justify-between items-center px-2 border-b py-2 text-center">
            <span className="font-bold min-w-[15%]">Profile</span>
            <span className="font-bold min-w-[15%]">Name</span>
            <span className="font-bold min-w-[20%]">Username</span>
            <span className="font-bold min-w-[20%]">Email</span>
            <span className="font-bold min-w-[25%]">Action</span>
          </div>
          {requestList.map((request) => {
            return <RequestCard key={request._id} {...request} />;
          })}
          <div className="flex justify-between gap-2 mt-5">
            <div className="text-[14px] flex flex-col h-auto gap-2">
              <span>
                Total Request :{" "}
                {
                  requestList.filter(
                    (request) => request.channelApprovalStatus === "PENDING"
                  ).length
                }
              </span>
              <span>
                Accepted Request :{" "}
                {
                  requestList.filter(
                    (request) => request.channelApprovalStatus === "ACCEPTED"
                  ).length
                }
              </span>
              <span>
                Rejected Request :{" "}
                {
                  requestList.filter(
                    (request) => request.channelApprovalStatus === "REJECTED"
                  ).length
                }
              </span>
            </div>
            <div className="flex justify-end gap-2 h-auto">
              <Button className="px-2 py-2 h-fit" variant={"danger"}>
                Decline All
              </Button>
              <Button className="px-2 py-2 h-fit" variant={"success"}>
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default DashBoard;
