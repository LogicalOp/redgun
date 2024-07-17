import { Input, ShellBar, Icon, Avatar } from "@ui5/webcomponents-react";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const Shellbar = () => {
  const navigate = useNavigate();
  var currentPath = useLocation().pathname;

  if (currentPath === "/") {
    currentPath = "Home";
  } else {
    currentPath = currentPath.charAt(1).toUpperCase() + currentPath.slice(2);
  }

  return (
    <ShellBar
      logo={
        <img
          alt="SAP Logo"
          src={`${process.env.PUBLIC_URL}/SAPChat.jpg`}
        />
      }
      notificationsCount="10"
      onLogoClick={function _a() {}}
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
      searchField={
        <Input icon={<Icon interactive name="search" />} showClearIcon />
      }
      showNotifications
      showProductSwitch
    ></ShellBar>
  );
};

export default Shellbar;
