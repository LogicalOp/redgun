import React from 'react';
import {
  Title,
  Card,
  Badge
} from "@ui5/webcomponents-react";

const Issue = () => {
  return (
    <div>
      <div>
        <Title style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft:'8rem', paddingTop:'3rem' }}>
          Issue 55
        </Title>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft:'8rem' }}>
          <Badge style={{ marginBottom: '0.5rem' }} onClick={function _a() {}}>
          Success Factors
          </Badge>
          <Badge style={{ marginBottom: '1rem' }} onClick={function _a() {}}>
            Neo Migration
          </Badge>
        </div>
        <h3 style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft:'8rem' }}>
          By James Doe <a href="mailto:james.doe@sap.com" style={{ marginLeft: '0.5rem' }}>james.doe@sap.com</a>
        </h3>
      </div>
      <Card style={{ width: "75%", height: "31vh", paddingTop: "1rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingLeft:'8rem' }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: '2rem 0 0 2rem' }}>
          <Title>Description</Title>
        </div>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem', textAlign: "left" }}>
          <h2>
            If "renderWhitespace" is set to true, there will be thirteen white spaces after this sentence.             
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </h2>
        </div>
      </Card>
      <Card style={{ width: "75%", height: "31vh", paddingTop: "1rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingLeft:'8rem' }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: '2rem 0 0 2rem' }}>
          <Title>Resolution</Title>
        </div>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem', textAlign: "left" }}>
          <h2>
            If "renderWhitespace" is set to true, there will be thirteen white spaces after this sentence.             
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </h2>
        </div>
      </Card>
    </div>
  );
};

export default Issue;
