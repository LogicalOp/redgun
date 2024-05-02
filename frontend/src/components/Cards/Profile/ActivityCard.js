import React from 'react';
import { Card, CardHeader, Title, Icon } from "@ui5/webcomponents-react";


const ActivityCard = ({ data }) => {
    
    return (
        <Card
            header={
                <CardHeader 
                    avatar={<Icon name="activities" />}
                    titleText="Activity"
                />
            }
            style={{
                width: "82%",
                height: "325px",
                paddingTop: '10px',
            }}
        >
            <div style={{ padding: '0 20px' }}>
                <Title level="H5">Last Activity</Title>
                <p>{data.lastActivity}</p>
                <Title level="H5">Next Activity</Title>
                <p>{data.nextActivity}</p>
            </div>
        </Card>
    );
};

export default ActivityCard;