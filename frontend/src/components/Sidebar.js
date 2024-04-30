import { SideNavigation, SideNavigationItem, Button } from "@ui5/webcomponents-react";
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const routes = {
  "Home": { path: "/", icon: "home" },
  "Learning": { path: "/learning", icon: "course-book" },
  // Add more routes as needed
};

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  return (
    <>
      <SideNavigation style={{ position: 'fixed', left: 0, top: '50px', bottom: 0, width: '100px' }} collapsed={true}>
        {Object.keys(routes).map((route) => (
          <SideNavigationItem
            key={route}
            text={route}
            icon={routes[route].icon}
            selected={routes[route].path === currentPath}
            onClick={() => navigate(routes[route].path)}
          />
        ))}
      </SideNavigation>
    </>
  );
};

export default Sidebar;