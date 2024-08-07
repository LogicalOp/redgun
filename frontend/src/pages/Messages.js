import React, { useState } from "react";
import MessageFeed from "../components/Messaging/MessageFeed";
import MessagePreview from "../components/Messaging/MessagePreview";

const Messages = () => {
  const [selectedUserID, setSelectedUserID] = useState(null);

  const handleChatSelect = (userID) => {
    console.log("Selected chat:", userID);
    setSelectedUserID(userID);
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <div style={{ flex: "0 0 30%", height: "100%" }}>
        <MessagePreview onChatSelect={handleChatSelect} />
      </div>
      <div style={{ flex: "1", height: "100%" }}>
        <MessageFeed userID={selectedUserID} />
      </div>
    </div>
  );
};

export default Messages;
