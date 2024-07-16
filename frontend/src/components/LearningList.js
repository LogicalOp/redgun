import React, { useState } from 'react';
import { List, StandardListItem, Input } from '@ui5/webcomponents-react';

const LearningList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const teams = [
        'Administrator', 'Architect', 'Business User', 'CEE', 'Consultant', 
        'Data Analyst', 'Developer', 'IT Lead', 'Marketing', 'Presales', 
        'Project Manager', 'Sales', 'Support Consultant'
    ];

    const filteredTeams = teams.filter(team =>
        team.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '2.5%' }}>
            <Input
                placeholder="Search Roles..."
                onChange={event => setSearchTerm(event.target.value)}
                style={{ width: '30vw', marginBottom: '1rem' }}
            />
            <List
                growing="Scroll"
                mode="MultiSelect"
                onItemClick={function _a(){}}
                onItemClose={function _a(){}}
                onItemDelete={function _a(){}}
                onItemToggle={function _a(){}}
                onLoadMore={function _a(){}}
                onSelectionChange={function _a(){}}
                separators="Inner"
                style={{ width: '30vw' }}
            >
                {filteredTeams.map((team, index) => (
                    <StandardListItem key={index}>
                        {team}
                    </StandardListItem>
                ))}
            </List>
        </div>
    );
};

export default LearningList;
