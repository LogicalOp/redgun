import React from 'react';
import { List, StandardListItem } from '@ui5/webcomponents-react';


const LearningList = () => {
    return (
        <div>
            <List
                growing="Scroll"
                headerText="List"
                mode="MultiSelect"
                onItemClick={function _a(){}}
                onItemClose={function _a(){}}
                onItemDelete={function _a(){}}
                onItemToggle={function _a(){}}
                onLoadMore={function _a(){}}
                onSelectionChange={function _a(){}}
                separators="Inner"
                style={{ width: '90vw', paddingLeft: '150px'}}
            >
                <StandardListItem additionalText="3">
                    List Item 1
                </StandardListItem>
                <StandardListItem additionalText="2">
                    List Item 2
                </StandardListItem>
                <StandardListItem additionalText="1">
                    List Item 3
                </StandardListItem>
            </List>
        </div>
    );
}

export default LearningList;