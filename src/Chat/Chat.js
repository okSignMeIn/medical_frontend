import React, { useState } from "react";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import "./Chat.css";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from "../Button/CustomButton2";

function Chat() {
  const [show, setShow] = useState(false);
  if (show === true) {
    return (
      <div className="chat">
        <div className="chatHead">
          <div className="jead">
            <img className="img_logo" src="/b_logo.png" alt="basys" />
            <h4 className="chatHeading">basys.ai chat</h4>
          </div>
          <div>
            <IconButton
              onClick={() => {
                setShow(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div className="chatBody">
          <ChatBox>
            <ReceiverMessage>
              <div style={{ color: "black" }}>
                Hi, How can I help you today?
              </div>
            </ReceiverMessage>
            <SenderMessage>
              <div style={{ color: "black" }}>
                Does the patient have coverage for insulin
              </div>
            </SenderMessage>
            <ReceiverMessage>
              <div style={{ color: "black" }}>Yes</div>
            </ReceiverMessage>
          </ChatBox>
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid grey",
            borderRadius: 10,
            backgroundColor: "white",
            marginTop: -15,
          }}
        >
          <input
            className="input_text"
            placeholder="Type Here..."
            type="text"
          />
          <ArrowCircleRightRoundedIcon sx={{fontSize:40}} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setShow(true);
        }}
      >
        <CustomButton title="Chat" />
      </div>
    );
  }
}

export default Chat;
