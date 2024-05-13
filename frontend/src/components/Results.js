import React from 'react';
import { Panel, Card, CardHeader, Icon, Badge, CheckBox} from '@ui5/webcomponents-react';

const Results = () => {
    return (
        <Panel
            accessibleRole="Form"
            headerLevel="H1"
            headerText="Learning Journeys"
            onToggle={function _a(){}}
            style={{ width: '55vw', paddingLeft: '150px' }}
        >
            <div style={{ display: 'flex', gap: '2.5vw', paddingLeft: '2.5vw' }}>
                <Card style={{ width: "12vw", height: "31vh"}}>
                    <CardHeader 
                        avatar={<Icon name="person-placeholder" />}
                        titleText="Title"
                        subtitleText="subtitle"
                    />
                    <Badge
                        colorScheme=""
                        design="Information"
                        icon={<Icon name="employee" />}
                        onClick={function _a(){}}
                    >
                        Not Started
                    </Badge>
                </Card>
                <Card style={{ width: "12vw", height: "31vh"}}>
                    <CardHeader 
                        avatar={<Icon name="person-placeholder" />}
                        titleText="Title"
                        subtitleText="subtitle"
                    />
                    <Badge
                        colorScheme=""
                        design="Positive"
                        icon={<Icon name="employee" />}
                        onClick={function _a(){}}
                    >
                        Complete
                    </Badge>
                </Card>
                <Card style={{ width: "12vw", height: "31vh"}}>
                    <CardHeader 
                        avatar={<Icon name="person-placeholder" />}
                        titleText="Title"
                        subtitleText="subtitle"
                    />
                    <Badge
                        colorScheme=""
                        design="Negative"
                        icon={<Icon name="employee" />}
                        onClick={function _a(){}}
                    >
                        Not available
                    </Badge>
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