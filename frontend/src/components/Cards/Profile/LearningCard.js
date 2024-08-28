import React from "react";
import {
  Card,
  CardHeader,
  Icon,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const LearningCard = ({journeyData}) => {
  const navigate = useNavigate();

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
      {journeyData && journeyData.length > 0 && (
          <List>
            {journeyData.map((journey, index) => (
              <StandardListItem
                key={index}
                onClick={() => {
                  navigate(`/journey/${journey.journey_id}`);
                }}
              >
                {journey.learning_journey_title}
              </StandardListItem>
            ))}
          </List>
        )}
      </div>
    </Card>
  );
};

export default LearningCard;