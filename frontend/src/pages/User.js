import React, { useState, useEffect } from "react";
import { Grid } from "@ui5/webcomponents-react";
import ProfileCardUser from "../components/Cards/Profile/ProfileCardUser";
import ProfileCardManager from "../components/Cards/Profile/ProfileCardManager";
import LearningCard from "../components/Cards/Profile/LearningCard";
import DonutChart from "../components/Charts/DonutChart";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import ExpCard from "../components/Cards/ExpCard.js";
import { useParams } from "react-router-dom";

const User = () => {
    const { id: userId } = useParams(); // Extract id from URL parameters
    console.log(userId);
    const { user, team, manager } = useGetUserInfo(userId);

  const learningData = {
    courses: ["ABAP Cloud Developer", "CAP for NodeJS"],
    progress: 50,
  };

  return (
    <Grid defaultSpan="XL12 L12 M12 S12" style={{ margin: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            width: "45vw",
          }}
        >
          {/* New div wrapper for user and manager cards */}
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{marginRight : "2rem", width: "100%"}}>
            <ProfileCardUser data={user} style={{ flex: 1 }} />
            </div>
            <ProfileCardManager data={manager} style={{ flex: 1 }} />
          </div>
          <ExpCard />
        </div>

        <div
          style={{
            width: "45vw",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <LearningCard data={learningData} />
          <DonutChart />
        </div>
      </div>
    </Grid>
  );
};

export default User;