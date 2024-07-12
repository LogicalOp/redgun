import { Card, CardHeader, Icon, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const ProfileCard = ({ user, manager }) => {
  if (user != null) {
    return (
      <Card
        header={
          <CardHeader
            avatar={<Icon name="person-placeholder" />}
            titleText={user.name}
            subtitleText={user.role}
          />
        }
        style={{
          width: "20vw",
          height: "31vh",
          paddingTop: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "0 20px" }}>
            <Title level="H5">{user.location}</Title>
            <p>{user.department}</p>
            <Title level="H5">Mobile</Title>
            <p>{user.mobile}</p>
            <Title level="H5">Phone</Title>
            <p>{user.phone}</p>
            <Title level="H5">Email</Title>
            <p>{user.email}</p>
          </div>
        </div>
      </Card>
    );
  } else {
    return (
      <Card
        header={
          <CardHeader
            avatar={<Icon name="person-placeholder" />}
            titleText={manager.name}
          />
        }
        style={{
          width: "20vw",
          height: "31vh",
          paddingTop: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "0 20px" }}>
            <Title level="H5">Name</Title>
            <p>{manager.name}</p>
            <Title level="H5">Phone</Title>
            <p>{manager.phone}</p>
            <Title level="H5">Email</Title>
            <p>{manager.email}</p>
          </div>
        </div>
      </Card>
    );
  }
};

export default ProfileCard;
