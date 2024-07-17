import React, { useState, useEffect } from "react";
import { Grid } from "@ui5/webcomponents-react";
import ProfileCardUser from "../components/Cards/Profile/ProfileCardUser";
import ProfileCardManager from "../components/Cards/Profile/ProfileCardManager";
import LearningCard from "../components/Cards/Profile/LearningCard";
import DonutChart from "../components/Charts/DonutChart";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const Profile = () => {
  const userId = localStorage.getItem("inumber");
  const { user, team, manager } = useGetUserInfo(userId);

  console.log(user);

  const learningData = {
    courses: ["ABAP Cloud Developer", "CAP for NodeJS"],
    progress: 50,
  };

  return (
    <Grid defaultSpan="XL12 L12 M12 S12" style={{ margin: "2rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "10rem",
          width: "80%",
        }}
        data-layout-span="XL6 L6 M6 S12"
      >
        <div style={{ width: "100%", marginBottom: "2rem" }}>
          <ProfileCardUser data={user} />
        </div>
        <ProfileCardManager data={manager} />
      </div>
      <div style={{ width: "70%" }} data-layout-span="XL6 L6 M6 S12">
        <div style={{ width: "100%", marginBottom: "2rem" }}>
          <LearningCard data={learningData} style={{ width: "100%" }} />
        </div>
        <DonutChart />
      </div>
    </Grid>
  );
};

export default Profile;
