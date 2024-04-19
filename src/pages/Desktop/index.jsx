import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";
import DesktopProjectcard from "../../components/DesktopProjectcard";
import DesktopUser from "../../components/DesktopUser";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import "styles/index.css"; // Import CSS file for styles

export default function DesktopPage() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const [showDescription, setShowDescription] = useState(null);

  // Data for images and descriptions
  const images = [
    {
      src: "./images/Web_Image.png",
      alt: "Image 1",
      description: "Description for Image 1",
      title:"Web"
    },
    {
      src: "./images/Embedded_Im.png",
      alt: "Image 2",
      description: "Description for Image 2",
      title:"Embedded Systems"

    },
    {
      src: "./images/Ai_Img.png",
      alt: "Image 3",
      description: "Description for Image 3",
      title:"Artificial Intellegence"

    },
    {
      src: "./images/Mobile_Img.png",
      alt: "Image 4",
      description: "Description for Image 4",
      title:"Mobile"

    },
  ];
  const handleImageClick = (image) => {
    if (image === images[0]) {
      window.location.href = "/web";
    } else if (image === images[1]) {

    }else if (image === images[2]) {
    }else if (image === images[3]) {
    }
  }

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
                  <Button
                    shape="round"
                    leftIcon={
                      <Img
                        src="images/img_vector_white_a700.svg"
                        alt="Vector"
                      />
                    }
                    className="gap-2.5 min-w-[118px]"
                    onClick={openPopup}
                  >
                    New Project
                  </Button>
                  <DesktopUser
                    className="flex justify-center items-center gap-2.5 p-[3px] flex-1"
                    userPhoto=".\images\img_hesham_1.png"
                    userName="Ahmed Atef Saleh"
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

<div className={`popup-overlay ${showPopup ? "active" : ""}`}>
  <div className={`popup ${showPopup ? "active" : ""}`}>
    <div className="popup-inner">
      <p1> What Types of Applications will we make ?</p1>
      <button className="close-btn" onClick={closePopup}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="image-container">
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <h3>{image.title}</h3> {/* Add the title here */}
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => handleImageClick(image)}
                onMouseEnter={() => setShowDescription(index)}
                onMouseLeave={() => setShowDescription(null)}
              />
              {showDescription === index && <p>{image.description}</p>}
              {index < images.length - 1 && <div className="divider"></div>}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  </div>
</div>


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
