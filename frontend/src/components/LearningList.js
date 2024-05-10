import React, { useState } from 'react';
import { List, StandardListItem, Input } from '@ui5/webcomponents-react';

const LearningList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const teams = ['Cybersecurity', 'VPR', 'HANA Development', 'UI & UX'];

    const filteredTeams = teams.filter(team =>
        team.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <List
                growing="Scroll"
                headerText="Teams"
                mode="MultiSelect"
                onItemClick={function _a(){}}
                onItemClose={function _a(){}}
                onItemDelete={function _a(){}}
                onItemToggle={function _a(){}}
                onLoadMore={function _a(){}}
                onSelectionChange={function _a(){}}
                separators="Inner"
                style={{ width: '30vw', paddingRight: '100px' }}
            >
                {filteredTeams.map((team, index) => (
                    <StandardListItem key={index}>
                        {team}
                    </StandardListItem>
                ))}
            </List>

            <Input
                placeholder="Search teams..."
                onChange={event => setSearchTerm(event.target.value)}
                style={{ width: '30vw', marginBottom: '1rem', paddingRight: '100px'}}
            />
        </div>
    );
};

export default LearningList;