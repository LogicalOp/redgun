import { Input, ShellBar, Icon, Avatar } from "@ui5/webcomponents-react";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const Shellbar = () => {
  const navigate = useNavigate();
  var currentPath = useLocation().pathname;

  if (currentPath === "/") {
    currentPath = "Home";
  } else {
    currentPath = currentPath.split('/')[1]; // Take the first part after the initial '/'
    if (currentPath.toLowerCase() === "customcode") {
      currentPath = "Custom Code";
    } else {
      currentPath = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
    }
  }

  return (
    <ShellBar
      logo={
        <img
          alt="SAP Logo"
          src={`${process.env.PUBLIC_URL}/SAPChat.jpg`}
        />
      }
      onLogoClick={() => navigate("/")}
      onMenuItemClick={function _a() {}}
      onNotificationsClick={function _a() {}}
      onProductSwitchClick={function _a() {}}
      onProfileClick={() => navigate("/profile")}
      onSearchButtonClick={function _a() {}}
      primaryTitle={currentPath}
      profile={
        <Avatar>
          <img
            src="https://sap.github.io/ui5-webcomponents-react/assets/Person-B7wHqdJw.png"
            alt="avatar"
          />
        </Avatar>
      }

      showNotifications
      showProductSwitch
    ></ShellBar>
  );
};

export default Shellbar;