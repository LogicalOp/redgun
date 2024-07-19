import React from "react";
import { Card, CardHeader, ProgressIndicator, Title } from "@ui5/webcomponents-react";

const ExpCard = ({ progress = 36, title = "Your Experience Level", level = "Beginner" }) => {
  return (
      <Card
        header={
          <CardHeader
          level = "H4"
            titleText={title}
            style={{margin:"2rem"}}
          />
        }
      >
        <p  style={{textAlign:"left", marginLeft:"1rem"}}>
          Your current level: {level}
        </p>
        <ProgressIndicator value={progress} displayValue={`${progress}%`} />
      </Card>
  );
};

export default ExpCard;