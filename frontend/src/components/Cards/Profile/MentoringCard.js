import React from 'react';
import { Card, CardHeader, Title, Icon } from "@ui5/webcomponents-react";

const MentoringCard = ({ data }) => {
    return (
        <Card
            header={
                <CardHeader 
                    avatar={<Icon name="e-learning" />}
                    titleText="Mentoring"
                />
            }
            style={{
                width: "200px",
                height: "325px",
                paddingTop: '10px',
            }}
        >
            <div style={{ padding: '0 20px' }}>
                {data.people.map((person, index) => (
                    <p key={index}>{person}</p>
                ))}
                <br /><br />
                <Title level="H5">Helped</Title>
                <h2 style={{ color: 'green', fontSize: '2em' }}>{data.totalHelped}</h2>
            </div>
        </Card>
    );
};

export default MentoringCard;