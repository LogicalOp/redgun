import React from "react";
import { List, StandardListItem, Avatar } from "@ui5/webcomponents-react";

const Messages = () => {
  const messages = [
    {
      id: 1,
      content: "Hello, how are you?",
      timestamp: "10:30 AM",
      read: true,
      name: "John Doe",
    },
    {
      id: 2,
      content: "Are we still on for today?",
      timestamp: "Yesterday",
      read: false,
      name: "Jane Smith",
    },
  ];

  // Function to get initials from a name
  const getInitials = (name) => {
    return name.split(' ').map((n) => n[0]).join('');
  };

  return (
    <div style={{ width: "100%" }}>
      <List>
        {messages.map((message) => (
          <StandardListItem
            key={message.id}
            infoState={message.read ? "Success" : "Warning"}
            additionalText={message.read ? "Read" : "Unread"}
            description={message.timestamp}
            image={<Avatar initials={getInitials(message.name)} />} // Display initials as an icon
          >
            {message.content}
          </StandardListItem>
        ))}
      </List>
    </div>
  );
};

export default Messages;