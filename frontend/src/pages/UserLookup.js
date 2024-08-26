import React, { useState, useEffect } from "react";
import { Input, Icon, Card, CardHeader } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { useNavigate } from "react-router-dom";

const UserLookup = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users`
        );
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const results = users.filter((user) => {
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

  const handleCardClick = (inumber) => {
    navigate(`/user/${inumber}`);
  };

  // Sort the filtered users alphabetically by first name
  const sortedUsers = filteredUsers.sort((a, b) =>
    a.first_name.localeCompare(b.first_name)
  );

  return (
    <div style={{ width: "100%" }}>
      <Input
        icon={<Icon name="employee-lookup" />}
        onInput={handleInputChange}
        placeholder="Search by first name, last name, inumber, or phone number"
        style={{ width: "30%", margin: "1rem" }}
      />
      <div style={{ maxHeight: "80vh", overflowY: "auto", marginTop: "1rem" }}>
        {sortedUsers.map((user) => (
          <Card
            key={user.inumber}
            style={{ margin: "1rem", width: "60%", cursor: "pointer" }}
            onClick={() => handleCardClick(user.inumber)}
          >
            <CardHeader titleText={`${user.first_name} ${user.last_name}`} />
            <div style={{ padding: "10px" }}>
              <p>
                <strong>Inumber:</strong> {user.inumber}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserLookup;