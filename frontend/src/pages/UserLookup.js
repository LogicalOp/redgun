import React, { useState, useEffect } from 'react';
import { Input, Icon } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const UserLookup = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const results = users.filter(user => {
            return (
                user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.inumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.phone.toString().includes(searchQuery)
            );
        });
        setFilteredUsers(results);
    }, [searchQuery, users]);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <Input
                icon={<Icon name="employee-lookup" />}
                onInput={handleInputChange}
                placeholder="Search by first name, last name, inumber, or phone number"
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.inumber}>
                        {user.first_name} {user.last_name} - {user.inumber} - {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserLookup;