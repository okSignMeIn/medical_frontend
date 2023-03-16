import React, { useState } from "react";
import Body from "../../Body/Body";
import Card2 from "../../Card/Card2";
import Request from "../../Request/Request";
import Sidebar from "../../Sidebar/Sidebar";
import "../../Card/Card2.css";
import "./SummaryPage.css";
import Card10 from "../../Card/Card10";
import Default from "../../Card/Default";
import Common from "../../Card/Common";
import AGP from "../../Card/AGP";
import Recommendations from "../../Card/Recommendations";
import Chat from "../../Chat/Chat";

const SummaryPage = () => {
  
  return (
    <>
      <Sidebar />
      <Body>
        <div className="summary">
          <div>
            <Card2 />
            <div
              className="Card2"
              style={{
                marginTop: -40,
                borderRadius: 10,
                fontSize: 14,
              }}
            >
              <p className="p">Change</p>
            </div>
          </div>
          <Card10 />
          <Default title="Medical History" body={<Common />} w={400} h={330} />
          <Default title="AGP Report" body={<AGP />} w={400} h={150} />
          <Default
            title="Recommendations"
            body={<Recommendations />}
            w={400}
            h={330}
          />
        </div>
      </Body>
          <div style={{bottom:40, right:20, position: "fixed"}}>
            <Chat />
          </div>
    </>
  );
};

export default SummaryPage;
