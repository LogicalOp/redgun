import { SideNavigation, SideNavigationItem, SideNavigationSubItem } from "@ui5/webcomponents-react";
import { useLocation, useNavigate } from 'react-router-dom';
import React from "react";

const routes = {
  "Home": "/",
  "Learning": "/learning",
  // Add more routes as needed
};

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  return (
    <SideNavigation style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}>
      {Object.keys(routes).map((route) => (
        <SideNavigationItem
          key={route}
          text={route}
          selected={routes[route] === currentPath}
          onClick={() => navigate(routes[route])}
        />
      ))}
    </SideNavigation>
  );
};

export default Sidebar;