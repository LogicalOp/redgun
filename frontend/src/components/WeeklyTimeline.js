import { Timeline, TimelineItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import React from "react";

const WeeklyTimeline = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Timeline style={{ width: '15%', height: '50%', paddingLeft: '7vw'}}>
          <TimelineItem titleText="Title 1" subtitleText="Subtitle 1" icon="add">
            Content 1
          </TimelineItem>
          <TimelineItem titleText="Title 2" subtitleText="Subtitle 2" icon="employee">
            Content 2
          </TimelineItem>
        </Timeline>
      </div>
    );
};
  
export default WeeklyTimeline;