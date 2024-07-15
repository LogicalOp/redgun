import React, { useState, useEffect } from "react";
import { Grid } from "@ui5/webcomponents-react";
import ProfileCardUser from "../components/Cards/Profile/ProfileCardUser";
import ProfileCardManager from "../components/Cards/Profile/ProfileCardManager";
import LearningCard from "../components/Cards/Profile/LearningCard";
import DonutChart from "../components/Charts/DonutChart";

const Profile = () => {
  const [test, setTest] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("inumber");

    if (userId) {
      fetch(`http://localhost:3001/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(`Error fetching user: ${error.message}`);
        });
    }
  }, []);

  const user = {
    name: "John Doe",
    role: "ABAP Developer",
    location: "Waterside 3",
    department: "CoE",
    mobile: "+353 87 123 4567",
    phone: "+353 1 123 4567",
    email: "john.doe@test.com",
  };

  const manager = {
    name: "Jane Doe",
    phone: "+353 87 765 4321",
    email: "jane.doe@test.com",
  };

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
