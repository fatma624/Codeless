// DesktopUser.js
import React, { useState } from "react";
import { Img, Text } from "./..";
import "styles/index.css"; // Import CSS file for styling
import { LogoutSVG } from "assets/images";
import DropdownItem from "components/DropdownItem";

export default function DesktopUser({
  userName = "User1",
  userPhoto,
  userEmail,
  onClick,
  ...props
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    window.location.href = "/login";
  };

  return (
    <span {...props} className="desktop-user" onClick={handleDropdownToggle}>
      <Img src={userPhoto} alt="User Photo" className="user-photo" />
      <div className="user-info">
        <Text size="xs" as="p">
          {userName}
        </Text>
        <div className="arrow-container">
          <Img
            src="images/img_arrow_down.svg"
            alt="Arrow Down"
            className={`arrow-icon ${showDropdown ? "" : "hidden"}`}
          />
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="user-details">
                <Img
                  src={userPhoto}
                  alt="User Photo"
                  className="user-photo-dropdown"
                />
                <div className="user-text">
                  <Text size="xs" as="p" className="user-name">
                    {userName}
                  </Text>
                  <Text size="xs" as="p" className="user-email">
                    {userEmail}
                  </Text>
                </div>
              </div>
              <div className="divider" />
              <DropdownItem
                itemName="Logout"
                iconSVG={<LogoutSVG className="dropdownItem-icon" />}
                onClick={handleLogout}
              />
            </div>
          )}
        </div>
      </div>
    </span>
  );
}
