import React from "react";
import CustomCodeForum from "../components/Cards/CustomCodeForum";
import AddCustomCode from "../components/Forms/AddCustomCode";

const CustomCode = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "80vh"}}>
      <div style={{ flex: "1", overflowY: "auto" }}>
        <CustomCodeForum width= "80%" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <AddCustomCode />
      </div>
    </div>
  );
};

export default CustomCode;