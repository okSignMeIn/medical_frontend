import React from "react";
import "./Sidebar.css";
import Item from "./Sidebar_item/Item";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import ArticleIcon from "@mui/icons-material/Article";
import { Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Modal } from "@mui/material";
import Card from "../Card/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#13273F",
      },
      secondary: {
        main: "#ae1e1f",
      },
    },
  });

  return (
    <>
      <div className="Sidebar">
        <div className="logo">
          <img className="img" src="" alt="logo" />
          {/* <p className="img_text">basys.ai</p> */}
        </div>

        <div className="Items">
          <Link
            to="/summary"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            <Item logo={<ContentPasteIcon />} title="Patient Summary" />
          </Link>
          <Item logo={<ArticleIcon />} title="Reports" />
          <Link to="/authorize" style={{ textDecoration: "inherit", color: "inherit" }} >
          <Item logo={<ContentPasteGoIcon />} title="Prior Authorization" />
          </Link>
          <Item logo={<AcUnitIcon />} title="Utilization Management" />
          <Item
            logo={<MenuRoundedIcon />}
            title="Claims"
            callback={() => {
              setModalIsOpen(true);
            }}
          />
          <Item logo={<AccountCircleRoundedIcon />} title="My Profile" />
        </div>
      </div>

      <Modal
        open={modalIsOpen}
        onClose={closeModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="box">
          <div>
            <CloseIcon id="close" />
          </div>
          <Card type="1" />

          <Card type="2" />
          <Card type="3" />
          <Card type="4" heading="Prior Authorization" entry1={10} />
          <Card type="5" />
          <Card type="6" />
          <Card type="7" />
          <Card type="8" />
          <div className="btn-theme">
            <ThemeProvider theme={theme}>
              <div className="btn">
                <Button
                  className="reject"
                  color="secondary"
                  variant="contained"
                  size="medium"
                >
                  Reject with Note
                </Button>
                <Button
                  className="accept"
                  color="primary"
                  variant="contained"
                  size="medium"
                >
                  Approve
                </Button>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Sidebar;
