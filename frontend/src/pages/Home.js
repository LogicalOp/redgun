import React from "react";
import Feed from "../components/Feed";
import { Grid } from "@ui5/webcomponents-react";

const Home = () => {
  return (
    <Grid style={{ width: "100%", display: "flex" }}>
      <div>
        <Feed />
      </div>
    </Grid>
  );
};

export default Home;
