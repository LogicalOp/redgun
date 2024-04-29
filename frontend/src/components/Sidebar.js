import { SideNavigation, SideNavigationItem, SideNavigationSubItem } from "@ui5/webcomponents-react";
import React from "react";
 
const Sidebar = () => {
  return (
   
      <SideNavigation style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}
        onSelectionChange={function _a() {}}
      >
        <SideNavigationItem icon="home" text="Home" />
        <SideNavigationItem icon="email" text="Learning" />
        <SideNavigationItem expanded icon="group" text="People">
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem icon="locate-me" selected text="Locations" />
        <SideNavigationItem icon="calendar" text="Events">
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>
   
  );
};
export default Sidebar;