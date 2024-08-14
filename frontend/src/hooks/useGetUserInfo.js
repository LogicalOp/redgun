import React, { useEffect, useState } from 'react';

export function useGetUserInfo(id) {
    const [user, setUser] = useState({});
    const [team, setTeam] = useState({});
    const [manager, setManager] = useState({});
    const apiUrl = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userId = id || localStorage.getItem("inumber");
                const userResponse = await fetch(`${apiUrl}/users/${userId}`);
                const userData = await userResponse.json();
                if (userData && userData.user && userData.user.length > 0) {
                    const fetchedUser = userData.user[0];
                    setUser(fetchedUser);
    
                    if (fetchedUser.team_id) {
                        const teamResponse = await fetch(`${apiUrl}/teams/${fetchedUser.team_id}`);
                        const teamData = await teamResponse.json();
                        if (teamData && teamData.team && teamData.team.length > 0) {
                            const team = teamData.team[0];
                            setTeam(team);
    
                            if (team.manager) {
                                const managerResponse = await fetch(`${apiUrl}/users/${team.manager}`);
                                const managerData = await managerResponse.json();
                                if (managerData && managerData.user && managerData.user.length > 0) {
                                    const manager = managerData.user[0];
                                    setManager(manager);
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                console.error(`Error fetching data: ${error.message}`);
            }
        };
    
        fetchUserInfo();
    }, [apiUrl, id]);

    return { user, team, manager };
};