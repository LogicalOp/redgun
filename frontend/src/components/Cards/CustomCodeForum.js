import React from 'react';
import { Card, Title, Panel, Badge, Button } from "@ui5/webcomponents-react";
import { useNavigate } from 'react-router-dom';
import { Icon } from '@ui5/webcomponents-react';
const CustomCodeForum = ({ data }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/issue/1'); // Make sure the URL matches the route
    };

    return (
        <Panel
            accessibleRole="Form"
            headerLevel="H1"
            headerText="Custom Code"
            onToggle={function _a(){}}
            style={{ paddingLeft: '7rem' }}
        >
            <div style={{ display: 'flex', gap: '2.5vw', paddingLeft: '2.5vw', paddingRight:'2.5vw' }}>
                <Card style={{ }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: '2rem 0 0 2rem' }}>
                        <Title>Issue 55</Title>
                        <Badge style={{ marginBottom: '0.5rem' }} onClick={function _a() {}}>
                            Success Factors
                        </Badge>
                        <Badge style={{ marginBottom: '1rem' }} onClick={function _a() {}}>
                            Neo Migration
                        </Badge>
                    </div>
                    <div style={{ paddingLeft: '2rem', paddingRight: '2rem', display:'inline-block', position: 'inherit', overflow:'hidden',flexWrap:'wrap'}}>
                        <h2>
                            If "renderWhitespace" is set to true, there will be thirteen white spaces after this sentence.             
                            Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        </h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 2rem' }}>
                        <Button design="Emphasized" onClick={handleRedirect}> See More </Button>
                    </div>
                </Card>
            </div>
        
        </Panel>
        
    );
};

export default CustomCodeForum;