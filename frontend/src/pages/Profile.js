import React from "react";
import { Grid } from "@ui5/webcomponents-react";
import ProfileCard from "../components/Cards/Profile/ProfileCard";
import LearningCard from "../components/Cards/Profile/LearningCard";
import DonutChart from "../components/Charts/DonutChart";

const Profile = () => {
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
    <Grid defaultSpan="XL12 L12 M12 S12" style={{ margin: "10rem" }}>
      <div data-layout-span="XL4 L4 M6 S12">
        <ProfileCard user={user} manager={null} />
        <ProfileCard user={null} manager={manager} />
      </div>
      <div data-layout-span="XL4 L4 M6 S12">
        <LearningCard data={learningData} />
      </div>
      <div data-layout-span="XL4 L4 M12 S12">
        <DonutChart />
      </div>
    </Grid>
  );
};

export default Profile;
