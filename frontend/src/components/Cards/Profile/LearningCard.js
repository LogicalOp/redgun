import React from "react";
import {
  Card,
  CardHeader,
  Icon,
  List,
  StandardListItem,
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
      <div className="scrollable-list">
        {data && data.courses && (
          <List>
            {data.courses.map((course, index) => (
              <StandardListItem key={index}>{course}</StandardListItem>
            ))}
          </List>
        )}
      </div>
    </Card>
  );
};

export default LearningCard;