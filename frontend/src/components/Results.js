import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, Button, Icon, List, StandardListItem, Input, MultiComboBox, MultiComboBoxItem } from '@ui5/webcomponents-react';

const Results = () => {
    const [journeys, setJourneys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const navigate = useNavigate();

    const teams = [
        'Administrator', 'Architect', 'Business User', 'CEE', 'Consultant',
        'Data Analyst', 'Developer', 'IT Lead', 'Marketing', 'Presales',
        'Project Manager', 'Sales', 'Support Consultant'
    ];

    const filteredTeams = teams.filter(team =>
        team.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredJourneys = journeys.filter(journey =>
        selectedTags.length === 0 || journey.roles.some(role => selectedTags.includes(role))
    );

    useEffect(() => {
        const fetchJourneys = async () => {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/learning_journeys`);
            const data = await response.json();
            setJourneys(data.learningJourneys);
        }
        fetchJourneys();
    }, [searchTerm]);

    const handlePreviewClick = (id) => {
        navigate(`/journey/${id}`);
    };

    const handleTagSelectionChange = (event) => {
        const selectedItems = Array.from(event.detail.items).map(item => item.text);
        setSelectedTags(selectedItems);
    };

    const handleTagClick = (event) => {
        const clickedTag = event.detail.targetItem.outerText;
        setSelectedTags(prevTags => {
            if (prevTags.includes(clickedTag)) {
                return prevTags.filter(tag => tag !== clickedTag);
            } else {
                return [...prevTags, clickedTag];
            }
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.75vw',
                paddingLeft: '2.5vw',
                marginTop: '8vh',
                width: '65vw',
                maxHeight: '80vh', // Set a maximum height
                overflowY: 'auto'  // Enable vertical scrolling
            }}>
                {filteredJourneys.map((journey, index) => (
                    <Card key={index} style={{ width: '12vw', height: "27vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <CardHeader
                                avatar={<Icon name="person-placeholder" />}
                                titleText={journey.title}
                                subtitleText={journey.experience}
                            />
                        </div>
                        <Button
                            design="Emphasized"
                            onClick={() => handlePreviewClick(journey.journey_id)}
                        >
                            Preview
                        </Button>
                    </Card>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8vh', width: '30vw' }}>
                <Input
                    placeholder="Search Roles..."
                    onChange={event => setSearchTerm(event.target.value)}
                    style={{ width: '100%', marginBottom: '1rem' }}
                />
                <List
                    growing="Scroll"
                    mode="MultiSelect"
                    onItemClick={function _a() { }}
                    onItemClose={function _a() { }}
                    onItemDelete={function _a() { }}
                    onItemToggle={function _a() { }}
                    onLoadMore={function _a() { }}
                    onSelectionChange={handleTagClick}
                    separators="Inner"
                    style={{ width: '100%' }}
                >
                    {filteredTeams.map((team, index) => (
                        <StandardListItem key={index}>
                            {team}
                        </StandardListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default Results;