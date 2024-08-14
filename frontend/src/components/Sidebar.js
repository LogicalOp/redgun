import { SideNavigation, SideNavigationItem } from "@ui5/webcomponents-react";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const routes = {
  Home: { path: "/", icon: "home" },
  Learning: { path: "/learning", icon: "course-book" },
  CustomCode: { path: "/customcode", icon: "source-code" },
  User: { path: "/user", icon: "employee" },
  Messages: { path: "/messages", icon: "message-popup" },
  Login: { path: "/login", icon: "log" },
  Register: { path: "/register", icon: "add" }
};

const Sidebar = () => {
  useEffect(() => {
    const applyCustomStyles = () => {
      const sideNavs = document.querySelectorAll("ui5-side-navigation");
      sideNavs.forEach((nav) => {
        if (nav.shadowRoot) {
          const style = document.createElement("style");
          style.textContent = `
            :host {
              --sapContent_Shadow0: none;
              box-shadow: none !important;
            }
          `;
          nav.shadowRoot.appendChild(style);
        }
      });
    };

    // Apply styles initially
    applyCustomStyles();

    // Set up a mutation observer to reapply the styles when necessary
    const observer = new MutationObserver(applyCustomStyles);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Clean up the observer to prevent memory leaks
    return () => observer.disconnect();
  }, []);
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  return (
    <>
      <SideNavigation
        style={{
          position: "relative",
          left: 0,
          top: "50px",
          bottom: 0,
          width: "100px",
        }}
        collapsed={true}
      >
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
