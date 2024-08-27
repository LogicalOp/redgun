import React, { useEffect, useState } from "react";
import { Card, Title, Badge, Button, Input } from "@ui5/webcomponents-react";
import { useNavigate } from "react-router-dom";

const CustomCodeForum = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
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
          if (Array.isArray(result.customCode)) {
            setData(result.customCode);
          } else {
            console.error("API response is not an array:", result);
          }
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = (project_id) => {
    navigate(`/issue/${project_id}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "0 2rem", width: "100%" }}>
      <Input
        placeholder="Search by title or content"
        onInput={handleSearch}
        style={{ marginBottom: "2rem", width: "100%" }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {filteredData.map((item) => (
          <Card
            key={item.project_id}
            style={{
              width: "100%",
              padding: "1rem",
              maxHeight: "35vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "1rem",
                overflow: "hidden",
              }}
            >
              <Title
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  width: "100%",
                }}
              >
                {item.title}
              </Title>
              {item.tags &&
                item.tags.map((tag, index) => (
                  <Badge key={index} style={{ marginBottom: "0.5rem" }}>
                    {tag}
                  </Badge>
                ))}
            </div>
            <div
              style={{ paddingBottom: "2rem" }}
            >
              <div
                style={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 4, // Adjust the number of lines to show before truncating
                  textOverflow: "ellipsis",
                }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "2rem",
              }}
            >
              <Button
                design="Emphasized"
                onClick={() => handleRedirect(item.project_id)}
              >
                See More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomCodeForum;