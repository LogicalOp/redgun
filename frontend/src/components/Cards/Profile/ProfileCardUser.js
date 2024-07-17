import { Card, CardHeader, Icon, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const ProfileCardUser = ({ data }) => {

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
          </div>
        </div>
      </Card>
    );

};

export default ProfileCardUser;
