import React from "react";
import {
  Card,
  CardHeader,
  Icon,
} from "@ui5/webcomponents-react";
import ExpCard from "../ExpCard";

const LearningCard = ({ data }) => {
  return (
    <Card
      header={
        <CardHeader
          avatar={<Icon name="learning-assistant" />}
          titleText="My Learning Journeys"
        />
      }
    >
      <div>
        {data &&
          data.courses &&
          data.courses.map((course, index) => <p key={index}>{course}</p>)}
      </div>
    </Card>
  );
};

export default LearningCard;
