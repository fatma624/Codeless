import React, { useState } from "react";
import { Img, Text } from "./..";
import "styles/index.css"; // Import CSS file for styling

export default function DesktopUser({ userName = "User1", userPhoto, onClick, ...props }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropdown);
  };
  
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    // Example: Redirect to logout route or perform logout action
  };

  return (
    <span {...props} className="desktop-user" onClick={onClick}>
      <Img src={userPhoto} alt="heshamone_one" className="user-photo" />
      <div className="user-info">
        <Text size="xs" as="p">
          {userName}
        </Text>
        <div className="arrow-container" onClick={handleDropdownToggle}>
          <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="arrow-icon" />
          {showDropdown && (
            <div className="dropdown-menu">
              <ul>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </span>
  );
}
