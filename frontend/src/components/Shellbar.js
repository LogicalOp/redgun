import { ShellBarItem, StandardListItem, CustomListItem, GroupHeaderListItem, Input, Button, ShellBar, Icon, Avatar } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Shellbar = () => {
    const navigate = useNavigate();

    return (
      <ShellBar
        logo={
          <img
            alt="SAP Logo"
            src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"
          />
        }
        notificationsCount="10"
        onLogoClick={function _a() {}}
        onMenuItemClick={function _a() {}}
        onNotificationsClick={function _a() {}}
        onProductSwitchClick={function _a() {}}
        onProfileClick={() => navigate('/profile')}
        onSearchButtonClick={function _a() {}}
        primaryTitle="{tbd}"
        profile={
          <Avatar>
            <img src="https://sap.github.io/ui5-webcomponents-react/assets/Person-B7wHqdJw.png" />
          </Avatar>
        }
        searchField={
          <Input icon={<Icon interactive name="search" />} showClearIcon />
        }
        showNotifications
        showProductSwitch
      >
      </ShellBar>
    );
  };
  
  export default Shellbar;
  