import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Title,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import { useGetPreview } from "../../hooks/useGetPreview";

const sampleData = [
  {
    id: 1,
    sender: "John Doe",
    message: "Hello, how are you?",
  },
  {
    id: 2,
    sender: "Jane Smith",
    message: "Meeting at 3 PM",
  },
  {
    id: 3,
    sender: "Alice Johnson",
    message: "Can you review my code?",
  },
];

const MessagePreview = ({ onChatSelect }) => {
  const { preview, loading, error } = useGetPreview();
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      const inumber = localStorage.getItem("inumber");
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`);
        const users = await response.json();
        const filteredUsers = users.users.filter(user => user.inumber !== inumber);

        const previewInumbers = preview.map(item => item.sender === inumber ? item.recipient : item.sender);
        const matchedUsers = filteredUsers.filter(user => previewInumbers.includes(user.inumber));

        const merged = preview.map(item => {
          const user = matchedUsers.find(user => user.inumber === (item.sender === inumber ? item.recipient : item.sender));
          return {
            ...item,
            name: user ? `${user.first_name} ${user.last_name}` : "Unknown",
          };
        });

        setMergedData(merged);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (preview && preview.length > 0) {
      fetchNames();
    }
  }, [preview]);

  const handleItemClick = (userId) => {
    if (onChatSelect) {
      onChatSelect(userId);
    }
  };

  return (
    <Card
      style={{ width: "100%", height: "90%" }}
      header={
        <CardHeader
          titleText="Chats"
        />
      }
    >
      <List>
        {mergedData.map((item) => (
          <StandardListItem
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            style={{ padding: "2rem", minHeight: "4rem", marginBottom: "1rem" }} // Added marginBottom to increase gap
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginLeft: "1rem", display: "flex", flexDirection: "column" }}>
                <Title level="H5">{item.name}</Title>
                <p style={{ fontWeight: item.recipient === 'I123' && item.sender !== 'I123' ? 'bold' : 'normal' }}>
                  {item.message}
                </p>
              </div>
            </div>
          </StandardListItem>
        ))}
      </List>
    </Card>
  );
}

export default MessagePreview;