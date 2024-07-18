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
    <Grid defaultSpan="XL12 L12 M12 S12" style={{ margin: "2rem", display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10rem'}}>
        {/* Left Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: '2rem', // Adds space between children
          }}
        >
          <div style={{ width: "100%" }}>
            <ProfileCardUser data={user} />
          </div>
          <ProfileCardManager data={manager} />
        </div>
        {/* Right Section */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div style={{ width: "100%" }}>
            <LearningCard data={learningData} />
          </div>
          <DonutChart />
        </div>
      </div>
    </Grid>
  );
}

export default Profile;
