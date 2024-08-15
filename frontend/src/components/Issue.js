import React, { useEffect, useState } from 'react';
import { Title, Card, Badge } from "@ui5/webcomponents-react";

const Issue = () => {
  const [issueData, setIssueData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const actualId = window.location.pathname.split('/').pop();
      const numericProjectId = parseInt(actualId, 10);

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/customcode`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          const issue = result.customCode.find(item => item.project_id === numericProjectId);

          if (issue) {
            setIssueData(issue);
          } else {
            setIssueData(null); 
          }
        } else {
          setIssueData(null); 
        }
      } catch (error) {
        setIssueData(null); 
      }
    };

    fetchData();
  }, []);  


  if (issueData === null) {
    return <div>Loading or Issue Not Found...</div>;
  }

  return (
    <div>
      <div>
        <Title style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '8rem', paddingTop: '3rem' }}>
          {issueData.title || 'Issue Title'}
        </Title>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '8rem' }}>
          <Badge style={{ marginBottom: '0.5rem' }} onClick={() => {}}>
            {issueData.inumber || 'Issue Number'}
          </Badge>
          {/* You can add more tags or badges here if applicable */}
        </div>
        <h3 style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '8rem' }}>
          Date: {new Date(issueData.date).toLocaleDateString()}
        </h3>
      </div>
      <Card style={{ width: "75%", height: "31vh", paddingTop: "1rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingLeft: '8rem' }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: '2rem 0 0 2rem' }}>
          <Title>Description</Title>
        </div>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem', textAlign: "left" }}>
          <h2>
            {issueData.description || 'Issue description goes here.'}
          </h2>
        </div>
      </Card>
      <Card style={{ width: "75%", height: "31vh", paddingTop: "1rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingLeft: '8rem' }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: '2rem 0 0 2rem' }}>
          <Title>Solution</Title>
        </div>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem', textAlign: "left" }}>
          <h2>
            {issueData.solution || 'Resolution details go here.'}
          </h2>
        </div>
      </Card>
    
      {issueData.img_url && (
        <div style={{ width: "75%", height: "31vh", paddingTop: "1rem", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingLeft: '8rem' }}>
          <img src={issueData.img_url} alt="Issue related visual" style={{ maxWidth: '75%', height: 'auto', borderRadius: '8px' ,paddingBottom:'2rem',}} />
        </div>
      )}
    </div>
  );
};

export default Issue;
