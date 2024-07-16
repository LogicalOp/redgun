import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Panel, Card, CardHeader, Icon, Badge, Button, CheckBox } from '@ui5/webcomponents-react';

const Results = () => {
    const navigate = useNavigate();

    const handlePreviewClick = (id) => {
        navigate(`/journey/${id}`);
    };

    return (
        <Panel
            accessibleRole="Form"
            headerLevel="H1"
            headerText="Learning Journeys"
            onToggle={function _a(){}}
            style={{ width: '55vw', paddingLeft: '150px' }}
        >
            <div style={{ display: 'flex', gap: '2.5vw', paddingLeft: '2.5vw' }}>
                <Card style={{ width: "12vw", height: "31vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <CardHeader
                            avatar={<Icon name="person-placeholder" />}
                            titleText="Title"
                            subtitleText="subtitle"
                        />
                        <Badge
                            colorScheme=""
                            design="Information"
                            icon={<Icon name="employee" />}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Not Started
                        </Badge>
                    </div>
                    <Button 
                        design="Transparent"
                        style={{ backgroundColor: 'silver', color: 'black', margin: '10px' }}
                        onClick={() => handlePreviewClick(1)}
                    >
                        Preview
                    </Button>
                </Card>
                <Card style={{ width: "12vw", height: "31vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <CardHeader
                            avatar={<Icon name="person-placeholder" />}
                            titleText="Title"
                            subtitleText="subtitle"
                        />
                        <Badge
                            colorScheme=""
                            design="Positive"
                            icon={<Icon name="employee" />}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Complete
                        </Badge>
                    </div>
                    <Button 
                        design="Transparent"
                        style={{ backgroundColor: 'silver', color: 'black', margin: '10px' }}
                        onClick={() => handlePreviewClick(2)}
                    >
                        Preview
                    </Button>
                </Card>
                <Card style={{ width: "12vw", height: "31vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <CardHeader
                            avatar={<Icon name="person-placeholder" />}
                            titleText="Title"
                            subtitleText="subtitle"
                        />
                        <Badge
                            colorScheme=""
                            design="Negative"
                            icon={<Icon name="employee" />}
                            onClick={(e) => e.stopPropagation()}
                        >
                            Not available
                        </Badge>
                    </div>
                    <Button 
                        design="Transparent"
                        style={{ backgroundColor: 'silver', color: 'black', margin: '10px' }}
                        onClick={() => handlePreviewClick(3)}
                    >
                        Preview
                    </Button>
                </Card>
                <br />
                <CheckBox
                    onChange={function _a(){}}
                    text="Completed"
                    valueState="None"
                />
            </div>
        </Panel>
    );
};

export default Results;
