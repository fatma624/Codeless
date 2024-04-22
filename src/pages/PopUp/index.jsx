import { useState } from "react";

const Popup = ({ showPopup, closePopup }) => {
  const [showDescription, setShowDescription] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Data for images and descriptions
  const images = [
    {
      src: "./images/Web_Image.png",
      hoverSrc: "./images/Web_Image_active.png",
      alt: "Image 1",
      description:
        "Create an integrated web application with full back-end control",
      title: "Web",
    },
    {
      src: "./images/Embedded_Im.png",
      hoverSrc: "./images/Embedded_Im_active.png",
      alt: "Image 2",
      description: "Make an Arduino project by moving a number of blocks",
      title: "Embedded Systems",
    },
    {
      src: "./images/Ai_Img.png",
      hoverSrc: "./images/Ai_Img_active.png",
      alt: "Image 3",
      description: "Create a trained model on your data set",
      title: "Artificial Intellegence",
    },
    {
      src: "./images/Mobile_Img.png",
      hoverSrc: "./images/Mobile_Img_active.png",
      alt: "Image 4",
      description: "Create a trained model on your data set",
      title: "Mobile",
    },
  ];

  const handleImageClick = (image) => {
    if (image === images[0]) {
      window.location.href = "/web";
    } else if (image === images[1]) {
    } else if (image === images[2]) {
    } else if (image === images[3]) {
    }
  };
  return (
    <div className={`popup-overlay ${showPopup ? "active" : ""}`}>
      <div className={`popup ${showPopup ? "active" : ""}`}>
        <div className="popup-inner">
          <p> What Types of Applications will we make ?</p>
          <button className="close-btn" onClick={closePopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#FFFFFF"
              fill="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="11" fill="#363636" strokeWidth="2" />
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="16" y1="8" x2="8" y2="16" />
              <line x1="8" y1="8" x2="16" y2="16" />
            </svg>
          </button>

          <div className="image-container">
            <div className="image-grid">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="image-item"
                  onMouseEnter={() => {
                    setHoveredImage(image.hoverSrc);
                    setShowDescription(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredImage(null);
                    setShowDescription(null);
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <h3>{image.title}</h3>
                  <img
                    src={
                      hoveredImage === image.hoverSrc
                        ? image.hoverSrc
                        : image.src
                    }
                    alt={image.alt}
                    className="image-element"
                  />
                  {showDescription === index && (
                    <div className="label">
                      <div className="text-wrapper">{image.description}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
