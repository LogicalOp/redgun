import { SideNavigation, SideNavigationItem, SideNavigationSubItem } from "@ui5/webcomponents-react";
import React from "react";

const routes = {
  "Home": "/",
  "Learning": "/learning",
  // Add more routes as needed
};

const Sidebar = () => {
  const currentPath = window.location.pathname;

  return (
    <SideNavigation style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}>
      {Object.keys(routes).map((route) => (
        <SideNavigationItem
          key={route}
          text={route}
          selected={routes[route] === currentPath}
          onClick={() => window.location.href = routes[route]}
        />
      ))}
    </SideNavigation>
  );
};

export default Sidebar;