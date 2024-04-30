import { Timeline, TimelineItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import React from "react";

const data = {
    
}

const WeeklyTimeline = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Timeline style={{ width: '20%', height: '50%', paddingLeft: '200px'}}>
          <TimelineItem titleText="Title 1" subtitleText="Subtitle 1" icon="add">
            Content 1
          </TimelineItem>
          <TimelineItem titleText="Title 2" subtitleText="Subtitle 2" icon="employee">
            Content 2
          </TimelineItem>
          <TimelineItem titleText="Title 3" subtitleText="Subtitle 3" icon="chain-link">
            Content 3
          </TimelineItem>
        </Timeline>
      </div>
    );
};
  
export default WeeklyTimeline;