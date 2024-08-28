import React, { useEffect, useState } from "react";
import { Title, Card, Badge } from "@ui5/webcomponents-react";
import DOMPurify from "dompurify";

const Issue = () => {
  const [issueData, setIssueData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const actualId = window.location.pathname.split("/").pop();
      const numericProjectId = parseInt(actualId, 10);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/customcode`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          const issue = result.customCode.find(
            (item) => item.project_id === numericProjectId
          );

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

  const sanitizedDescription = DOMPurify.sanitize(
    issueData.description || "Issue description goes here."
  );
  const sanitizedSolution = DOMPurify.sanitize(
    issueData.solution || "Resolution details go here."
  );

  return (
    <div style={{ width: "80%" }}>
      <div>
        <Title style={{ padding: "3rem 0" }}>
          {issueData.title || "Issue Title"}
        </Title>
        <div>
          <Badge style={{ marginBottom: "0.5rem" }} onClick={() => {}}>
            {issueData.inumber || "Issue Number"}
          </Badge>
        </div>
        <h3>Date: {new Date(issueData.date).toLocaleDateString()}</h3>
      </div>
      <Card
        style={{
          width: "80%",
          height: "31vh",
          paddingTop: "1rem",
        }}
      >
        <div
          style={{
            padding: "2rem 0 0 2rem",
          }}
        >
          <Title>Description</Title>
        </div>
        <div
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
            textAlign: "left",
            overflowY: "auto",
            maxHeight: "20vh", // Adjust the height as needed
          }}
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </Card>
      <Card
        style={{
          width: "80%",
          height: "31vh",
          paddingTop: "1rem",
        }}
      >
        <div
          style={{
            padding: "2rem 0 0 2rem",
          }}
        >
          <Title>Solution</Title>
        </div>
        <div
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
            textAlign: "left",
            overflowY: "auto",
            maxHeight: "20vh", // Adjust the height as needed
          }}
          dangerouslySetInnerHTML={{ __html: sanitizedSolution }}
        />
      </Card>
  
      {issueData.img_url ? (
        <div
          style={{
            width: "80%",
            height: "31vh",
            paddingTop: "1rem",
          }}
        >
          <img
            src={issueData.img_url}
            alt="Issue related visual"
            style={{
              maxWidth: "80%",
              height: "auto",
              borderRadius: "8px",
              paddingBottom: "2rem",
            }}
          />
        </div>
      ) : null}
    </div>
  )}

export default Issue;
