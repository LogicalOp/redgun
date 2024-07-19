import React from "react";
import Feed from "../components/Feed";
import { FlexBox, Grid } from "@ui5/webcomponents-react";
import MVPCard from "../components/Cards/MVPCard.js";
import NewsCard from "../components/Cards/NewsCard.js";

const Home = () => {

  return (
    <FlexBox style={{ width: "100%", direction: "row" }}>
      <Grid defaultSpan="XL6 L6 M6 S12" position="Center">
        <div style={{paddingTop:"3rem"}}>
          <Feed />
        </div>
        <div style={{ paddingLeft:"4rem", paddingTop:"3rem", width: "80%", height:"100%" }}>
          <MVPCard/>
          <div style={{marginTop:"2rem"}}>
          <NewsCard/>
          </div>
          
        </div>
      </Grid>
    </FlexBox>
  );
};

export default Home;
