import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Title,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import { useGetPreview } from "../../hooks/useGetPreview";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const MessagePreview = ({ onChatSelect }) => {
  const { preview } = useGetPreview();
  const [mergedData, setMergedData] = useState([]);
  const navigate = useNavigate();

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
        console.error("Failed to fetch users", error);
      }
    };

    fetchNames(); // Initial fetch

    const intervalId = setInterval(fetchNames, 60000); // Fetch every 60 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [preview]);

  const handleItemClick = (userId) => {
    if (onChatSelect) {
      onChatSelect(userId);
    }
    localStorage.setItem("selectedChat", userId);
    navigate(`/messages/${userId}`);
  };

  const truncateMessage = (message) => {
    const sanitizedMessage = DOMPurify.sanitize(message).replace(/\n/g, ' ');
    return sanitizedMessage.length > 20 ? sanitizedMessage.substring(0, 20) + '...' : sanitizedMessage;
  };

  return (
    <Card
      style={{ width: "100%", height: "80vh" }}
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
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div style={{ marginLeft: "1rem", display: "flex", flexDirection: "column", width: "100%", textAlign: "left" }}>
                <Title level="H5" style={{ textAlign: "left" }}>{item.name}</Title>
                <div style={{ fontWeight: item.recipient === 'I123' && item.sender !== 'I123' ? 'bold' : 'normal', textAlign: "left" }}>
                  {parse(truncateMessage(item.message))}
                </div>
              </div>
            </div>
          </StandardListItem>
        ))}
      </List>
    </Card>
  );
}

export default MessagePreview;