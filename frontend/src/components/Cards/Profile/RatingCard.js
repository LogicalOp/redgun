import React from 'react';
import { Card, CardHeader, List, StandardListItem, RatingIndicator } from "@ui5/webcomponents-react";

const RatingCard = ({ data }) => {
    return (
        <Card
            header={
                <CardHeader 
                    titleText="Mentor Rating"
                />
            }
            style={{
                width: "89vw",
                height: "20vh",
                paddingTop: '10px',
                paddingLeft: '20px',
            }}
        >
            <List growing="Scroll" style={{ maxHeight: '150px', overflowY: 'auto' }}>
                {data.map((mentee, index) => (
                    <StandardListItem key={index}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <RatingIndicator
                                onChange={function _a(){}}
                                readonly
                                value={mentee.rating}
                                style={{ marginRight: '10px' }}
                            />
                            {mentee.name || 'Anon'}
                            {mentee.info.slice(0, 3).map((descriptor, i) => (
                                <div key={i} style={{ 
                                    marginLeft: '10px', 
                                    padding: '5px', 
                                    backgroundColor: 'lightgreen', 
                                    borderRadius: '5px' 
                                }}>
                                    {descriptor}
                                </div>
                            ))}
                        </div>
                    </StandardListItem>
                ))}
            </List>
        </Card>
    );
};

export default RatingCard;