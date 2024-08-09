import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Title,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";

const sampleData = [
  {
    id: 1,
    sender: "John Doe",
    message: "Hello, how are you?",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    sender: "Jane Smith",
    message: "Meeting at 3 PM",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    sender: "Alice Johnson",
    message: "Can you review my code?",
    avatar: "https://via.placeholder.com/150",
  },
];

const MessagePreview = ({ data = sampleData , onChatSelect}) => {

const handleItemClick = (userId) => {
    if(onChatSelect){
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
        {data.map((item) => (
          <StandardListItem 
            key={item.id} 
            onClick={() => handleItemClick(item.id)} 
            style={{ padding: "2rem", minHeight: "4rem", marginBottom: "1rem" }} // Added marginBottom to increase gap
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar image={item.avatar} />
              <div style={{ marginLeft: "1rem", display: "flex", flexDirection: "column" }}>
                <Title level="H5">{item.sender}</Title>
                <p>{item.message}</p>
              </div>
            </div>
          </StandardListItem>
        ))}
      </List>
    </Card>
  );
};

export default MessagePreview;