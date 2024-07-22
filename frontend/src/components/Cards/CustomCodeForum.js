import React, { useEffect, useState } from 'react';
import { Card, Title, Panel, Badge, Button } from "@ui5/webcomponents-react";
import { useNavigate } from 'react-router-dom';

const CustomCodeForum = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/customcode`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('API Response:', result);
                    if (Array.isArray(result.customCode)) {
                        setData(result.customCode);
                    } else {
                        console.error('API response is not an array:', result);
                    }
                } else {
                    console.error('Failed to fetch data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleRedirect = (project_id) => {
        navigate(`/issue/${project_id}`);
    };

    return (
        <Panel
            accessibleRole="Form"
            headerLevel="H1"
            headerText="Custom Code"
            onToggle={() => {}}
            style={{ padding: '2rem', width: '100%' }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0 2rem', width: '100%' }}>
                {data.map((item) => (
                    <Card key={item.project_id} style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: '1rem' }}>
                            <Title>{item.title}</Title>
                            {item.tags && item.tags.map((tag, index) => (
                                <Badge key={index} style={{ marginBottom: '0.5rem' }}>
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    
                        <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                            <h2>
                                {item.description}
                            </h2>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
                            <Button design="Emphasized" onClick={() => handleRedirect(item.project_id)}> See More </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </Panel>
    );
};

export default CustomCodeForum;
