import { useState, useEffect } from "react";
import { Card, CardHeader, Icon, Title, Dialog, Input} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const ProfileCardUser = ({ data }) => {
  const [message, setMessage] = useState("");
  console.log(message);

  useEffect(() => {
    try {
      const response = fetch(`${process.env.REACT_APP_BACKEND_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender_id: localStorage.getItem("inumber"),
          receiver_id: data.inumber,
          message: message,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during sending message:", error);
    }
  }, [message]);

    return (
      <Card
        header={
          <CardHeader
            avatar={<Icon name="person-placeholder" />}
            titleText={data.first_name + " " + data.last_name}
            subtitleText={data.email}
          />
        }
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "0 20px" }}>
            <Title level="H5">Waterside 3</Title>
            <p>CoE</p>
            <Title level="H5">Phone</Title>
            <p>{data.phone}</p>
            <Title level="H5">Email</Title>
            <p>{data.email}</p>
            <Input
              icon={<Icon name="paper-plane" />}
              placeholder="Type message..."
              onChange={(e) => setMessage(e.target.value)}
              value={message} />
          </div>
        </div>
      </Card>
    );

};

export default ProfileCardUser;
