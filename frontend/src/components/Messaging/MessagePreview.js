import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Title,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import { useGetPreview } from "../../hooks/useGetPreview";

const MessagePreview = ({ onChatSelect }) => {
  const { preview } = useGetPreview();
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
            onClick={() => {
              const inumber = localStorage.getItem('inumber');
      
              if (item.sender !== inumber) {
                handleItemClick(item.sender);
              } else if (item.recipient !== inumber) {
                handleItemClick(item.recipient);
              } else {
                console.log('No match found for sender or recipient');
              }
            }}
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