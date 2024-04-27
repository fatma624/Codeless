import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";
import DesktopProjectcard from "../../components/DesktopProjectcard";
import DesktopUser from "../../components/DesktopUser";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import "styles/index.css"; // Import CSS file for styles
import Popup from "pages/PopUp";
import NewProject from "pages/NewProject";

export default function DesktopPage() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <Helmet>
        <title>Codeless</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="w-full bg-white-A700">
        <div className="flex justify-end pt-4 px-4 bg-gray-40">
          <div className="flex md:flex-col justify-end items-start w-[98%] mr-1 gap-6">
            <Sidebar
              width="202px !important"
              onClick={() => {}}
              className="flex flex-col h-screen pb-[171px] gap-[35px] top-0 md:pb-5 !sticky overflow-auto"
            >
              <Img
                src="images/img_logo.png"
                alt="logo_one"
                className="w-[50%] object-cover"
                style={{ marginBottom: "20px" }}
              />
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "10px 10px 10px 18px",
                    gap: "10px",
                    alignSelf: "start",
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: "16px",
                    borderRadius: "10px",
                    [`&:hover, &.ps-active`]: {
                      color: "#0a5699",
                      backgroundColor: "#dbeff7 !important",
                    },
                  },
                }}
                rootStyles={{ gap: "100px" }}
                className="flex flex-col self-center w-full"
              >
                <div className="flex flex-col pt-2.5 gap-1">
                  <MenuItem
                    icon={
                      <Img
                        src="images/img_vector_light_blue_900.svg"
                        alt="vector_three"
                        className="h-[18px]"
                      />
                    }
                    onClick={MyProjectonClick}
                    style={{ marginBottom: "265px" }}
                  >
                    My Projects
                  </MenuItem>
                </div>
                <div
                  className="flex flex-col pt-2.5 gap-2.5"
                  style={{ marginTop: "auto" }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="images/img_group.svg"
                        alt="image"
                        className="h-[20px]"
                      />
                    }
                    onClick={ArchievedonClick}
                  >
                    Archived
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        src="images/img_vector_black_900_22x19.svg"
                        alt="vector_seven"
                        className="h-[19px]"
                      />
                    }
                    onClick={HelpOnClick}
                  >
                    Help & support
                  </MenuItem>
                </div>
              </Menu>
            </Sidebar>

            <div className="flex flex-col items-center gap-[21px] flex-1">
              <header className="flex justify-between items-center w-[80%]">
                <Text size="md" as="p" className="self-start">
                  My Projects
                </Text>
                <div className="flex self-end justify-center items-center w-[32%] gap-[13px]">
                  <NewProject openPopup={openPopup} />
                  <DesktopUser
                    className="flex justify-center items-center gap-2.5 p-[3px] flex-1"
                    userPhoto=".\images\img_hesham_1.png"
                    userName="Ahmed Atef Saleh"
                    userEmail="AhmedAtefSaleh@gmail.com"
                  />
                </div>
              </header>

              <div className="justify-center gap-5 grid-cols-3 p-10 md:grid-cols-[1fr] sm:p-5 rounded-tl-[40px] rounded-tr-[40px] bg-white-A700 shadow-xs grid">
                <DesktopProjectcard className="flex flex-col w-full" />
                <DesktopProjectcard
                  projectcounter="Project 2"
                  projectType="Embedded Systems"
                  duration="Edited 2 hours ago"
                  className="flex flex-col w-full"
                />
                <DesktopProjectcard
                  projectcounter="Project 3"
                  projectType="Artificial Intelligence"
                  duration="Edited 3 days ago"
                  className="flex flex-col w-full"
                />
                <DesktopProjectcard
                  projectcounter="Project 4"
                  duration="Edited 5 minutes ago"
                  className="flex flex-col w-full"
                />
                <DesktopProjectcard
                  projectcounter="Project 5"
                  duration="Edited 1 months ago"
                  className="flex flex-col w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup showPopup={showPopup} closePopup={closePopup} />
    </>
  );
}

function MyProjectonClick() {
  window.location.href = "/desktop";
}

function ArchievedonClick() {
  window.location.href = "/archived";
}
function HelpOnClick() {
  window.location.href = "/helpandsupport";
}
