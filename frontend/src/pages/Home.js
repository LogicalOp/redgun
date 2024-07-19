import React from "react";
import Feed from "../components/Feed";
import { FlexBox, Grid } from "@ui5/webcomponents-react";
import HomeLearning from "../components/HomeLearning";

const Home = () => {
  const learningData = {
    courses: ["ABAP Cloud Developer", "CAP for NodeJS"],
    progress: 50,
  };

  return (
    <FlexBox style={{ width: "100%", direction: "row" }}>
      <Grid defaultSpan="XL6 L6 M6 S12" position="Center">
        <div style={{paddingTop:"3rem"}}>
          <Feed />
        </div>
        <div style={{ paddingLeft:"10rem", paddingTop:"3rem", width: "80%", height:"100%" }}>
          <HomeLearning data={learningData} />
        </div>
      </Grid>
    </FlexBox>
  );
};

export default Home;
