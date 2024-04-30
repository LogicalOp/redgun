import React from "react";
import { Card, CardHeader, Button, Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const HomeCard = ({ data }) => {
    return (
        <Card
            header={
                <CardHeader 
                    avatar={<Icon name="person-placeholder" />}
                    titleText={data.name}
                    subtitleText={data.team}
                />
            }
            style={{
                width: "325px",
            }}
        >
            <h3>{data.content}</h3>
            <div style={{ textAlign: 'right', paddingRight: '20px', paddingBottom: '5px' }}>
                <Button design="Positive" size="Small" style={{ marginRight: '10px' }} icon="thumb-up">Like</Button>
                <Button design="Emphasized" size="Small" icon="share">Share</Button>
            </div>
        </Card>
    );
}

export default HomeCard;