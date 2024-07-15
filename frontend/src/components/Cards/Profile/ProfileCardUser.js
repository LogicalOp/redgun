import { Card, CardHeader, Icon, Title } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

const ProfileCardUser = ({ data}) => {

    return (
      <Card
        header={
          <CardHeader
            avatar={<Icon name="person-placeholder" />}
            titleText={data.name}
            subtitleText={data.role}
          />
        }
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "0 20px" }}>
            <Title level="H5">{data.location}</Title>
            <p>{data.department}</p>
            <Title level="H5">Mobile</Title>
            <p>{data.mobile}</p>
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
